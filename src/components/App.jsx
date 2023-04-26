import { useState } from 'react'
import '../styles/global.css'
import styles from './App.module.css'
import { Header } from './Header'
import { TarefaCard } from './TarefaCard'
import { TarefaInput } from './TarefaInput'

function App() {

    const [tarefa, setTarefa] = useState([]);

    function adicionaTarefa(content) {
        setTarefa([...tarefa, content])
    }




    return(
        <div>
            <Header />

            <div className={styles.whapper}>
            
                <main>
                    <div className={styles.createTask}>
                         <TarefaInput  onAdicionaTarefa={adicionaTarefa}/>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.index}>
                            <p className={styles.totalTasks}>Tarefas criadas <span>{5}</span></p>
                            <p className={styles.concluideTasks}>Concluídas <span>{2} de {5}</span></p>
                        </div>
                        <div className={styles.tasks}>
                            {tarefa.map((tar) => {
                                return (
                                    <TarefaCard content={tar}/>
                                )
                            })}
                        </div>
                    </div>
                </main>
            
            </div>
        </div>
    )
}

export default App
