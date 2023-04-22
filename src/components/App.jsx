import '../styles/global.css'
import styles from './App.module.css'
import { Header } from './Header'
import { TarefaCard } from './TarefaCard'
import { TarefaInput } from './TarefaInput'

function App() {
    return(
        <div>
            <Header />

            <div className={styles.whapper}>
            
                <main>
                    <div className={styles.createTask}>
                         <TarefaInput />
                    </div>
                    <div className={styles.body}>
                        <div className={styles.index}>
                            <p className={styles.totalTasks}>Tarefas criadas <span>{5}</span></p>
                            <p className={styles.concluideTasks}>Concluídas <span>{2} de {5}</span></p>
                        </div>
                        <div className={styles.tasks}>
                            <TarefaCard
                                content="Integer urna interdum massa libero auctor neque turpis turpis semper."
                            />
                            <TarefaCard
                                content="Integer urna interdum massa libero auctor neque turpis turpis semper.Integer urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semper"
                            />
                            <TarefaCard
                                content="Integer urna interdum massa libero auctor neque turpis turpis semper.Integer urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semper"
                            />
                            <TarefaCard
                                content="Integer urna interdum massa libero auctor neque turpis turpis semper.Integer urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semper"
                            />
                            <TarefaCard
                                content="Integer urna interdum massa libero auctor neque turpis turpis semper.Integer urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semperInteger urna interdum massa libero auctor neque turpis turpis semper"
                            />
                        </div>
                    </div>
                </main>
            
            </div>
        </div>
    )
}

export default App
