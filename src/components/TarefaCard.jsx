import styles from "./TarefaCard.module.css";
import { Circle } from "@phosphor-icons/react";
import { CheckCircle } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function TarefaCard({ content, onRemoveTarefa, onChecked }) {
  function handleDeleteTarefa() {
    console.log(content);
    onRemoveTarefa(content.id);
  }

  function check() {
    console.log(content.id);
    onChecked(content.id);
  }

  return (
    <div className={styles.TarefaCard}>
      <button onClick={check}>
        {content.isChecked ? (
          <CheckCircle className={styles.checked} size={24} color="#4EA8DE" />
        ) : (
          <Circle size={24} color="#4EA8DE" />
        )}
      </button>
      <p>{content.content}</p>
      <button onClick={handleDeleteTarefa} className={styles.delete}>
        <Trash size={24} />
      </button>
    </div>
  );
}
