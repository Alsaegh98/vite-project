import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default function App(){


  const todo = { 
    text: 'A brand new task', 
    done: true 
  };
  const todos = [
    {text: 'Learn JavaScript', done: true},
    {text: 'Learn JSX', done: false},
    {text: 'Learn HTML', done: true},
    {text: 'Learn CSS', done: true},
    {text: 'Master React', done: false},
  ];

  const todoList = todos.map((todo, index) =>
    <li key={index}>{todo.text}</li>
  );
////option 1
function todoMsg (todo){
  if(todo.done) {
        return 'Task Completed' - $(todo.text)
      } else {
        return todo.text;
      }}
  return (
    <>
     <h1>JavaScript in JSX</h1>
      <p>{todo.text}</p>

      <h2>Conditional Rendering</h2>
     

      <h2>Looping with JSX</h2>

        <ul>{todoList}</ul>
        <hr />
        <h2>Looping and Conditional Rendering</h2>
      <ul>
        {todos.map((todo, index) => 
          <li key={index}>
            {todo.done ? `Task Completed - ${todo.text}` : todo.text}
          </li>
        )}
      </ul>
    </>
  );
};


