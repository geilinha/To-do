import styles from "./TarefaCard.module.css";
import { Circle } from "@phosphor-icons/react";
import { CheckCircle } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react";
import { useState } from "react";

export function TarefaCard({ content, onRemoveTarefa }) {
  function handleDeleteTarefa() {
    console.log(content);
    onRemoveTarefa(content.id);
  }

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.TarefaCard}>
      <button
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      >
        {isChecked ? (
          <CheckCircle className={styles.check} size={24} color="#4EA8DE" />
        ) : (
          <Circle className={styles.checked} size={24} color="#4EA8DE" />
        )}
      </button>
      <p>{content.content}</p>
      <button onClick={handleDeleteTarefa} className={styles.delete}>
        <Trash size={24} />
      </button>
    </div>
  );
}
