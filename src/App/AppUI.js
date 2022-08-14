import React from "react";
import {TodoCounter} from '../TodoCounter/index.js'
import {TodoSearch} from '../TodoSearch/index.js'
import {TodoList} from '../TodoList/index.js'
import {TodoButton} from '../TodoButton/index.js'
import {TodoItem} from '../TodoItem/index.js'

function AppUi({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo, 
  deleteTodo,
}) {

  return (

    <React.Fragment>

      <TodoCounter
        total = {totalTodos}
        completed = {completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo =>(
          // key = identificador de text, opción de react...
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete = {()=> completeTodo(todo.text)}
            onDelete = {()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButton/>

    </React.Fragment>

  );
  
}



export {AppUi};