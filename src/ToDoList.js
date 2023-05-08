import React, { useState } from 'react';
import SaveLocalStorage from './components/SaveLocalStorage';
import LoadLocalStorage from './components/LoadLocalStorage';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  function editTodo(index) {}

  return (
    <div>
      <section>
        <h2 class="title">
          What's up,{' '}
          <input class="user" type="text" id="user" placeholder="Name here" />
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.elements);
            const todo = {
              content: e.target.elements.content.value,
              category: e.target.elements['todo-type'].value,
              done: false,
              createdAt: new Date().getTime(),
            };
            addTodo(todo);
            e.target.reset();
          }}
        >
          <p>What's on your todo?</p>
          <input
            type="text"
            name="content"
            placeholder="Add your todo here..."
          />
          <p>Pick a category</p>
          <div className="flex">
            <label className="type" htmlFor="personal">
              personal
              <input
                type="radio"
                name="todo-type"
                value="personal"
                id="personal"
              ></input>
            </label>

            <label className="type" htmlFor="business">
              business
              <input
                type="radio"
                name="todo-type"
                value="business"
                id="business"
              ></input>
            </label>
          </div>

          <button type="submit">ADD TODO</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(e) => {
                    const newTodos = [...todos];
                    newTodos[index].done = e.target.checked;
                    setTodos(newTodos);
                  }}
                />
                <span className={`bubble ${todo.category}`}></span>
              </label>

              {todo.content}

              <button className="edit" onClick={() => editTodo(index)}>
                Edit
              </button>
              <button className="delete" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TodoList;
