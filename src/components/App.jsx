import '../styles/global.css'
import { Header } from './Header'
import { TarefaInput } from './TarefaInput'

function App() {
    return(
        <div>
            <Header />
            
            <main>
                <TarefaInput />
            </main>
        </div>
    )
}

export default App
