import { useState } from "react";
import "../styles/global.css";
import styles from "./App.module.css";
import { Header } from "./Header";
import { TarefaCard } from "./TarefaCard";
import { TarefaInput } from "./TarefaInput";

function App() {
  const [tarefa, setTarefa] = useState([]);

  const id = tarefa.length;

  function adicionaTarefa(content) {
    const item = setTarefa([...tarefa, { id, content, isChecked: false }]);
  }

  function removeTarefa(contentToDelete) {
    const filteredList = tarefa.filter((content) => {
      return content.id !== contentToDelete;
    });

    setTarefa(filteredList);
  }

  const quantidadeTarefa = tarefa.length;

  return (
    <div>
      <Header />
      <div className={styles.whapper}>
        <main>
          <div className={styles.createTask}>
            <TarefaInput onAdicionaTarefa={adicionaTarefa} />
          </div>
          <div className={styles.body}>
            <div className={styles.index}>
              <p className={styles.totalTasks}>
                Tarefas criadas <span>{quantidadeTarefa}</span>
              </p>
              <p className={styles.concluideTasks}>
                Concluídas{" "}
                <span>
                  {2} de {quantidadeTarefa}
                </span>
              </p>
            </div>
            <div className={styles.tasks}>
              {tarefa.map((tar) => {
                return (
                  <TarefaCard
                    key={tar.id}
                    content={tar}
                    onRemoveTarefa={removeTarefa}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
