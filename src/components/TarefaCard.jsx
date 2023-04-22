import styles from './TarefaCard.module.css'
import { CheckCircle } from '@phosphor-icons/react'
import { Trash } from '@phosphor-icons/react'

export function TarefaCard(props) {
    return (
        <div className={styles.TarefaCard}>
            <button>
                <CheckCircle size={24} color="#4EA8DE"/>
            </button>
            <p>{props.content}</p>
            <button>
                <Trash size={24} color="#808080"/>
            </button>
        </div>
    )
}