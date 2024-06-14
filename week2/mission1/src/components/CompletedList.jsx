import React from 'react';
import '../App.css';

function FinishList({ todos, setTodos }) {
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='list' id='finish'>
      {todos.map(todo => (
        todo.isDone && (
          <div className='listitem' key={todo.id}>
            <div className='detail'>{todo.content}</div>
            <button
              className='itembutton'
              id='deleteButton'
              onClick={() => handleDelete(todo.id)}>삭제</button>
          </div>
        )))}
    </div>
  );
}

export default FinishList;