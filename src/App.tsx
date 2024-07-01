import styles from "./App.module.css";

import rocketLogo from "./assets/rocket_logo.svg";
import listIcon from "./assets/list_icon.svg";

import Task from "./components/Task";

import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";

interface ITask {
  id: number;
  content: string;
  done: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");
  const [maxId, setMaxId] = useState(1);

  const isListEmpty = tasks.length == 0;
  const tasksQuant = tasks.length;
  const tasksConcluded = tasks.filter((task) => task.done).length;

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    // O state do maxId só foi colocada pq os dados estão na memória
    setMaxId(maxId + 1);

    const newTasks = [
      ...tasks,
      {
        id: maxId,
        content: newTask,
        done: false
      },
    ]

    setTasks(newTasks);
    setNewTask("");
  }

  function handleChangeNewTaskText(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTask(event.target.value);
  }

  function changeTaskStatus(id: number) {
    const newTasks = tasks.map((task) =>
      task.id == id ? { ...task, done: !task.done } : task
    );

    setTasks(() => {
      return newTasks;
    });
  }

  function deleteTask(id: number) {
    const tasksWithountDeleted = tasks.filter((task) => task.id != id);
    setTasks(tasksWithountDeleted);
  }

  return (
    <>
      <div className={styles.app}>
        <header>
          <img src={rocketLogo} alt="" />
        </header>

        <form onSubmit={handleCreateTask} className={styles.inputContent}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            value={newTask}
            onChange={handleChangeNewTaskText}
          />
          <button type="submit">
            Criar <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.taskListContent}>
          <div>
            <span>
              Tarefas criadas <span>{tasksQuant}</span>{" "}
            </span>
            <span>
              Concluídas{" "}
              {isListEmpty ? (
                <span>0</span>
              ) : (
                <span>
                  {tasksConcluded} de {tasksQuant}
                </span>
              )}
            </span>
          </div>

          <div>
            {isListEmpty ? (
              <div className={styles.taskListEmpty}>
                <div>
                  <img src={listIcon} alt="" />
                  <span>Você ainda não tem tarefas cadastradas</span>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </div>
            ) : (
              <div className={styles.taskList}>
                {tasks.map((task) => {
                  return (
                    <Task
                      key={task.id}
                      id={task.id}
                      content={task.content}
                      done={task.done}
                      onChangeTaskStatus={changeTaskStatus}
                      onDeleteTask={deleteTask}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
