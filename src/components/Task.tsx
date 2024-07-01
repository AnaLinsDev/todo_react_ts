import styles from "./Task.module.css";

import { Trash } from "@phosphor-icons/react";

export default function Task() {
  return (
    <div className={styles.task}>
      <input className={styles.radioCheck} type="radio" checked />
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>

      <Trash size={24} />
    </div>
  );
}
