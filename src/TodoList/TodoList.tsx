import React from "react";
import { FC } from "react";
import styles from "./TodoList.module.css";
import { ITask } from "../App";

interface ITodoList {
  list: ITask[];
  remove(text: string): void;
  checkDone(task:ITask):void;
}

const TodoList: FC<ITodoList> = ({ list, remove, checkDone }) => {
  return (
    <>
      {list?.length > 0 ? (
        <ul className={styles.todo_list}>
          {list.map((entry, index) => (
            <div className="todo">
              <li key={index} className={styles.list}>
                {entry.isDone === true ? (
                  <input type="checkbox" className={styles.checkTask} checked onClick={() => checkDone(entry)}/>
                ) : (
                  <input type="checkbox" className={styles.checkTask} onClick={() => checkDone(entry)}/>
                )}
                <span className={styles.text}>{entry.text}</span>
                <button
                  className={styles.delete_button}
                  onClick={() => {
                    remove(entry.text);
                  }}
                >
                  Delete
                </button>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <p>No tasks</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
