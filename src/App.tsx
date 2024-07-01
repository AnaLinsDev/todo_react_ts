import styles from "./App.module.css";

import rocketLogo from "./assets/rocket_logo.svg";
import listIcon from "./assets/list_icon.svg";

import Task from "./components/Task";

import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const isListEmpty = tasks.length == 1;

  return (
    <>
      <div className={styles.app}>
        <header>
          <img src={rocketLogo} alt="" />
        </header>

        <div className={styles.inputContent}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar <PlusCircle size={20} />
          </button>
        </div>

        <div className={styles.taskListContent}>
          <div>
            <span>
              Tarefas criadas <span>0</span>{" "}
            </span>
            <span>
              Concluídas <span>2 de 5</span>
            </span>
          </div>

          <div>
          {isListEmpty ? (
            <div className={styles.taskList}>
              <div>
                <img src={listIcon} alt="" />
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>
          ) : (
            <div>
              <Task />

              <Task />

              <Task />

              <Task />

              <Task />
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
