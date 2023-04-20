import styles from './TarefaInput.module.css'
import { PlusCircle } from "@phosphor-icons/react"


export function TarefaInput() {
    return (
        <div className={styles.tarefa}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">Criar <PlusCircle size={16}/></button>
        </div>
    )
}