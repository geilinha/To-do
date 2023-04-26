import { useState } from 'react'
import styles from './TarefaInput.module.css'
import { PlusCircle } from "@phosphor-icons/react"


export function TarefaInput({ onAdicionaTarefa }) {
    
    const [texto, setTexto] = useState('')
    
    function handleAdicionaTarefa(event) {
        event.preventDefault()

        onAdicionaTarefa(texto)
    }

    function handleText(event) {
        setTexto(event.target.value)
    }

    return (
        <form onSubmit={(event) => handleAdicionaTarefa(event)} className={styles.tarefa}>
            <input onChange={(event) => handleText(event)} type="text" placeholder="Adicione uma nova tarefa"/>
            <button type="submit">Criar <PlusCircle size={16}/></button>
        </form>
    )
}