import React from 'react'
import Container from './Layout/Container'
import Sidebar from './Layout/Sidebar'
import Widget from './Layout/Widget'
import Content from './Layout/Content'

const App = () => {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Content></Content>
      <Widget></Widget>
      
    </Container>
  )
}

export default App



