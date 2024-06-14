import React from 'react'
import { CartIcon } from '../constants/icons'
import styled from 'styled-components'

export default function NavBar() {
  return (
    <Wrap>
        <Container>
              <AppName>UMC PlayList</AppName>
              <Icon><CartIcon /></Icon>
        </Container>
      </Wrap>
  )
}

const Wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  height: 3rem;

  padding: 1rem;

  background-color: purple;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  color: #FFFFFF;
`;

const AppName = styled.h2`
  color: #FFFFFF;
`;