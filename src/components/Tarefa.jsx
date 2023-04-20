import styles from './Tarefa.module.css'

export function Tarefa() {
    return (
        <div className={styles.tarefa}>
            <input type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">Criar</button>
        </div>
    )
}