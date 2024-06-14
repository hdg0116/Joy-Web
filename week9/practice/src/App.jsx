import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import InputTodo from './components/inputTodo'
import TodoList from './components/todoList'
import styled from 'styled-components'
import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <Wrap>
        <Container>
          <Title>Todo List</Title>
          <InputTodo />
          <TodoList />
        </Container>
      </Wrap>
    </Provider>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  background-color: #FFFFFF;

  border-radius: 1rem;

  width: 20rem;
  height: 30rem;
`;

const Title = styled.h1`
  border-bottom: 0.1rem solid #ccc;

  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 1rem;
`;