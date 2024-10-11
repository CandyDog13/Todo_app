import React, { useEffect } from "react";
// import "./App.css";
import { useState } from "react";
// import TodoList from "./TodoList/TodoList";
import styles from "./App.module.css";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";
import Menu from "./Menu/Menu";

export interface ITask {
  text: string;
  isDone: boolean;
  id: number;
}

function App() {
  const [task, setTask] = useState<ITask>({ text: "", isDone: false, id: 0 });
  const [todoArray, setTodoArray] = useState<ITask[]>(() => {
    const savedItem = localStorage.getItem("todos");
    const parsedItem = savedItem === null ? [] : JSON.parse(savedItem);
    return parsedItem || [];
  });

  const handleCount = (newArray: ITask[]) => {
    return newArray.filter((task) => {
      return task.isDone === false;
    }).length;
  };

  const [count, setCount] = useState<number>(() => {
    return handleCount(todoArray);
  });
  const [viewArray, setViewArray] = useState<ITask[]>(todoArray);

  

  const addTodo = () => {
    if (task.text !== "") {
      task.id = generateUniqueId();
      const newArray = [task, ...todoArray];
      setTodoArray(newArray);
      localStorage.setItem("todos", JSON.stringify(newArray));
      setTask({ text: "", isDone: false, id: 0 });
      setCount(handleCount(newArray));
      setViewArray(newArray);
    }
  };

  const deleteTodo = (text: string) => {
    const newTodos = todoArray.filter((task) => {
      return task.text !== text;
    });
    setTodoArray(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setCount(handleCount(newTodos));
    setViewArray(newTodos);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ text: event.target.value, isDone: false, id: 0 });
  };

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const handleDoneChange = (task: ITask) => {
    const newArray = todoArray;
    const foundIndex = todoArray.findIndex((x) => x.id === task.id);
    newArray[foundIndex].isDone = !newArray[foundIndex].isDone;
    setTodoArray(newArray);
    localStorage.setItem("todos", JSON.stringify(newArray));
    setCount(handleCount(newArray));
  };

  const changeViewArray = (input: string) => {
    switch (input) {
      case 'done':
        setViewArray(todoArray.filter((task) => {
          return task.isDone === true;
        }));
        break;

      case 'noDone':
        setViewArray(todoArray.filter((task) => {
          return task.isDone === false;
        }));
        break;

      default:
        setViewArray(todoArray);
        break;
    }
  };

  const clearCompleted = () => {
    const newTodos = todoArray.filter((task) => {
      return task.isDone !== true;
    });
    setTodoArray(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setCount(handleCount(newTodos));
    setViewArray(newTodos);
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.headerName}>todos</h1>
      <TodoInput
        value={task}
        handleInputChange={handleInputChange}
        addTodo={addTodo}
      />
      <Menu count={count} handleChangeView = {changeViewArray} handleClearCompleted = {clearCompleted}/>
      <TodoList
        list={viewArray}
        remove={deleteTodo}
        checkDone={handleDoneChange}
      />
    </div>
  );
}

export default App;
