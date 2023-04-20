import '../styles/global.css'
import { Header } from './Header'
import { Tarefa } from './Tarefa'

function App() {
    return(
        <div>
            <Header />
            
            <main>
                <Tarefa />
            </main>
        </div>
    )
}

export default App
