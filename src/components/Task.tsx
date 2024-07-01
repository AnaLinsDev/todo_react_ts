import styles from "./Task.module.css";

import { Trash } from "@phosphor-icons/react";

import checkIcon from "../assets/check_icon.svg";

interface ITaskProps {
  id: number;
  content: string;
  done: boolean;
  onChangeTaskStatus: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export default function Task({
  id,
  content,
  done,
  onChangeTaskStatus,
  onDeleteTask,
}: ITaskProps) {
  function handleChangeStatus() {
    onChangeTaskStatus(id);
  }

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div
      className={
        done ? styles.task : `${styles.task}  ${styles.taskChecked}`
      }
    >
      <div onClick={handleChangeStatus}>
        {done ? (
          <img src={checkIcon} alt="" />
        ) : (
          <label role="radio">
            <input type="radio" checked={false} readOnly />
          </label>
        )}
      </div>

      <span className={done ? styles.checked : ""}>{content}</span>

      <Trash
        className={styles.trashIcon}
        onClick={handleDeleteTask}
        size={18}
      />
    </div>
  );
}
