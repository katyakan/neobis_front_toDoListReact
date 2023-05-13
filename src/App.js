import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css';

import TodoList from './TodoList';

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;