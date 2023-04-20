import styles from './TarefaCard.module.css'
import { CheckCircle } from '@phosphor-icons/react'
import { Trash } from '@phosphor-icons/react'

export function TarefaCard(props) {
    return (
        <div className={styles.TarefaCard}>
            <CheckCircle size={24} />
            <p>{props.content}</p>
            <Trash size={24}/>
        </div>
    )
}