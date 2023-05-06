import React from 'react';

let todos = [];
let user = '';
function SaveLocalStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('user', user);
}

export default SaveLocalStorage;
