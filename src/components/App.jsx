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
                    <TarefaInput />
                    <TarefaCard
                        content="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
                    />
                </main>
            
            </div>
        </div>
    )
}

export default App
