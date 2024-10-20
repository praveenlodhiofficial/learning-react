import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import ConditionalRenderingInReact from './components/ConditionalRenderingInReact'

const App = () => {
  return (
    <>
      <h1>Learn React <FaReact /> with me <FaUserAstronaut /> .</h1>
      <hr />
      <ConditionalRenderingInReact/>
    </>
  )
}

export default App
