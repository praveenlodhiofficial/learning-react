import React from 'react'

const name = "Praveen"
const date = new Date();

const Greeting = () => {
  return (
    <div>
        <h1>Greeting to Everyone, from {name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, consectetur adipisicing elit. Quisquam, quos.</p>
        <p>Todays Date is {date.toLocaleDateString()}</p>
    </div>
  )
}

export default Greeting