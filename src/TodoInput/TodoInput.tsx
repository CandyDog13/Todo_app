import React from 'react';
import { FC } from 'react';
import styles from './todoInput.module.css'
import { ITask } from '../App';

interface ITodoInput {
  value: ITask;
  handleInputChange(event:React.ChangeEvent):void;
  addTodo():void;
}


const TodoInput:FC<ITodoInput> = ({ value, handleInputChange, addTodo }) => {
  return (
    <div className={styles.input_wrapper}>
      <input
      className={styles.inputBar}
        type="text"
        name="todo"
        value={value.text}
        placeholder="What needs to be done?"
        onChange={handleInputChange}
      />
      <button className={styles.add_button} onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
