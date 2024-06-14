import React, { useState } from 'react';
import './App.css';

import Header from './components/Title';
import TodoList from './components/TodoList';
import FinishList from './components/CompletedList';

let nextId = 0;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Send E-mail", isDone: false },
    { id: 2, content: "Make Work-Books", isDone: false },
    { id: 3, content: "Sleeping", isDone: false },
    { id: 4, content: "Watching You-Tube", isDone: false },
  ]);

  const [inputValue, setInputValue] = useState('');

  const todoCreate = (e) => {
    if (e.key === 'Enter' && inputValue !== "") {
      setTodos([
        ...todos,
        { id: nextId++, content: e.target.value, isDone: false },
      ]);
      setInputValue('');
    }
  }

  return (
    <div className='background'>
      <div className='todoBox'>
        <Header />
        <div id='line'></div>
        <input
          className='inputBox'
          type='text'
          placeholder='UMC 스터디 계획을 작성해보세요!'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e => todoCreate(e)}
        />
        <div id='listBox'>
          <div id='toDoList'>
            <div className='listTitle'>해야 할 일</div>
            <TodoList todos={todos} setTodos={setTodos} />
          </div>
          <div id='completed'>
            <div className='listTitle'>해낸 일</div>
            <FinishList todos={todos} setTodos={setTodos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;