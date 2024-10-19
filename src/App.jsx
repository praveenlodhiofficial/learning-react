import React from 'react'
import AttributesPropsInReact from './components/AttributesPropsInReact'
import ChildrenPropsInReact from './components/ChildrenPropsInReact'

const App = () => {
  return (
    <>
      {/* Attributes Props */}
      <AttributesPropsInReact/>

      <hr />

      {/* Children Props */}
      <ChildrenPropsInReact>
        <h1>Apple iPhone 15</h1>
        <p>The latest flagship smartphone with advanced features.</p>
        <ul>
          <li>A16 Bionic chip</li>
          <li>Dynamic Island</li>
          <li>48MP main camera</li>
          <li>USB-C port</li>
        </ul>
      </ChildrenPropsInReact>
    </>
  )
}

export default App
