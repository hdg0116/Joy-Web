//todolist를 입력하고 추가해주는 form 컴포넌트

import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {add} from '../redux/todoSlice'
import styled from 'styled-components'

export default function InputTodo() {
  const dispatch = useDispatch()

  const [todoList, setTodoList] = useState( //todoList라는 state 생성
    {
        id : 0,
        text: "",
    }
  )

  function handleText(e) {
    setTodoList({text : e.target.value})
  }

  function onReset () {
    setTodoList({text : ""})
  }

  return (
    <Wrap>
        <Form onSubmit={(e) => {
            e.preventDefault()
            if (todoList.text !== "") {dispatch(add(todoList.text))}
            else (alert("할 일을 입력해주세요!"))
            onReset()
        }}>
            <Container>
                <InputBox
                type='text'
                value={todoList.text}
                onChange={handleText}></InputBox>
                <AddButton type='submit' value='+'></AddButton>
            </Container>
        </Form>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 1.7rem;
`;

const InputBox = styled.input`
  border: 0.1rem solid gray;
  border-radius: 0.3rem;
  margin-right: 1rem;
  padding: 0.2rem;

  width: 13rem;
`;

const AddButton = styled.input`
  border: none;
  border-radius: 1rem;
  background-color: gray;
  color: #FFFFFF;
  padding: 0.2rem;

  width: 1.6rem;
  height: 1.6rem;

  &:hover {
    cursor: pointer;
  }
`;