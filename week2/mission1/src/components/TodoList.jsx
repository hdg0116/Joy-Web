import React from 'react';
import '../App.css';

function TodoList({ todos, setTodos }) {
  const handleFinish = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: true };
      }
      return todo;
    }));
  }

  return (
    <div className='list' id='todo'>
      {todos.map(todo => (
        !todo.isDone && (
          <div className='listitem' key={todo.id}>
            <div className='detail'>{todo.content}</div>
            <button
              className='itembutton'
              id='finishButton'
              onClick={() => handleFinish(todo.id)}>완료</button>
          </div>
        )))}
    </div>
  );
}

export default TodoList;