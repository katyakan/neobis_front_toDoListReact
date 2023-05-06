import React from 'react';
//  localStorage

let todos = [];
let user = '';
function LoadLocalStorage() {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  user = localStorage.getItem('user') || '';
}
export default LoadLocalStorage;
