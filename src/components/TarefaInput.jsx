import styles from './TarefaInput.module.css'

export function TarefaInput() {
    return (
        <div className={styles.tarefa}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">Criar</button>
        </div>
    )
}