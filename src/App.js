//IMPORTS
//-Modules
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'


//STYLE
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #F1EFE7;
  }
`
const BackgroundColor = styled.div`
  background: #F1EFE7;
  width: 100vw;
  height: 100vh;
`


//MAIN COMPONENT
function App() {
  return (
    <>
      <GlobalStyle/>
      <BackgroundColor />
    </>
  )
}
export default App
