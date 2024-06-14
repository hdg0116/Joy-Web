//todoList를 보여주는 컴포넌트

import React from 'react'
import { useDispatch, useSelector } from 'react-redux' //useSelector 임포트 > 리듀서에 있는 state에 접근 가능
import { remove, complete } from '../redux/todoSlice' //remove, complete 액션 불러옴
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default function TodoList() {
  const todoList = useSelector(state => state.todo)
  const dispatch = useDispatch()

  const trash = <FontAwesomeIcon icon={faTrashCan} />

  console.log(todoList)

  const todoListView = todoList.map((todo, idx) => (
    <List key={todoList[idx].id}>
        <Input 
        type='checkbox'
        onChange={() => dispatch(complete(todoList[idx].id))} />
        <Container>{todo.complete === false ? <>{todo.text}</> : <Del>{todo.text}</Del>}</Container>
        <Button type='button' onClick={() => dispatch(remove(todoList[idx].id))}>{trash}</Button>
    </List>
  )) //checkbox 버튼과 휴지통 버튼을 누르면 dispatch()로 리듀서에 id값 넘김 > remove, complete 액션을 통해 새로운 값 반환

  return (
    <>
        <Ul>{todoListView}</Ul>
    </>
  )
}

const Ul  = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  width: 80%;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  height: 1.5rem;
`;

const Input  = styled.input.attrs({type: 'checkbox'})`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  appearance: none;
  border-radius: 1rem;
  border: 0.1rem solid skyblue;
  position: relative;

  &:checked {
    background-color: skyblue;
  }
`;

const Container = styled.div`
  width: 12rem;
  padding-left: 0.5rem;
  font-size: 0.9rem;
`;

const Del = styled.del``;

const Button = styled.button`
  color: #ccc;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;