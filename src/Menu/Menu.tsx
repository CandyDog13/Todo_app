import React from 'react';
import { FC } from 'react';
import styles from './Menu.module.css'

interface IMenu {
  count:number;
  handleChangeView(input:string):void;
  handleClearCompleted():void;
}


const Menu:FC<IMenu> = ({count, handleChangeView, handleClearCompleted}) => {
  return (
    <div className={styles.menu}>
      <span className={styles.counter}>{count} items left</span>
      <div className={styles.filter_buttons}>
        <button className={styles.button_filter} onClick={()=>handleChangeView('all')}>All</button>
        <button className={styles.button_filter} onClick={()=>handleChangeView('noDone')}>Active</button>
        <button className={styles.button_filter} onClick={()=>handleChangeView('done')}>Completed</button>
      </div>
      <button className={styles.clear_button} onClick={handleClearCompleted}>Clear completed</button>
    </div>
  );
};

export default Menu;