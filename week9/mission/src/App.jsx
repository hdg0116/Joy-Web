import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cart from './components/cart'
import NavBar from './components/NavBar'
//import styled from 'styled-components'
//import { CartIcon } from './constants/icons'
import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Cart />
    </Provider>
  );
};