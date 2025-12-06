import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
const [todos, setTodos] = useState([]);
const [headingInput, setHeadingInput] = useState('');
const [listInputs, setListInputs] = useState({});  

  return (
    <>
      <div className="todo-container">
        <h1 className="title">Mi Lista de Tareas</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button">Agregar encabezado</button>
        </div>
      </div>
      <div className="todo_main">
       
      </div>
    </>
  );
};

export default TodoList;
