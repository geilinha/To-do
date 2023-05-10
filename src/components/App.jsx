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
    setTarefa([...tarefa, { id, content, isChecked: false }]);
  }

  function removeTarefa(id) {
    const filteredList = tarefa.filter((content) => {
      return content.id !== id;
    });

    setTarefa(filteredList);
  }

  const tarefaQuantidade = tarefa.length;
  const tarefaConcluidaList = tarefa.filter((content) => {
    return content.isChecked === true;
  });

  const tarefaConcluida = tarefaConcluidaList.length;

  function handleChecked(id) {
    const newTarefaChecked = tarefa.map((tar) => {
      if (tar.id === id) {
        tar.isChecked = !tar.isChecked;
      }
      return tar;
    });
    setTarefa(newTarefaChecked);
  }

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
                Tarefas criadas <span>{tarefaQuantidade}</span>
              </p>
              <p className={styles.concluideTasks}>
                Concluídas{" "}
                <span>
                  {tarefaConcluida} de {tarefaQuantidade}
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
                    onChecked={handleChecked}
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
