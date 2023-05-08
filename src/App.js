import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css';

import TodoList from './ToDoList';

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
