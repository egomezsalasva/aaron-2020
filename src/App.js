//IMPORTS
//-Modules
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Switch, Route, NavLink, Link } from "react-router-dom"
//-Images
import logo from './images/logo.png'
//-Components
import ShortFilm from './components/ShortFilms'
import Commercials from './components/Commercials'
import About from './components/About'
 

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
  /* ul {
    display: block;
    list-style-type: none;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  } */
  a, a:visited {
    color: #000;
    text-decoration: none;
}
`
// const BackgroundColor = styled.div`
  //   background: #F1EFE7;
  //   width: 100vw;
  //   height: 100vh;
// `
const MainContainer = styled.div`
  display: flex;
  flex-flow: row;
  height: 100vh;
  align-items: center;
  padding: 30px;
`
const Header = styled.div`
  width: auto;
  height: 100%;
  border: 1px solid #000;
  .headerContainer{
    display: flex;
    justify-content: flex-end;
    flex-flow: column;
    position: relative;
    align-items: center;
    width: 100%;
    height: 100%;
    .menu{
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row-reverse;
      position: absolute;
      top: -10px;
      right: 50%;
      transform: rotate(-90deg);
      transform-origin: 100% 50%;
      list-style: none;
      padding: 0;
      margin: 30px 0;
      li{
        padding-right: 30px;
        &:first-of-type{
          padding-right: 0px;
        }
        .link{
          width: auto; /* BUG Breaks line*/
          position: relative;
          font-family: 'GTHaptikTrial-Light';
          font-size: 15px;
          color: #BFBEB7;
          letter-spacing: 0;
        }
        .link-active{
          color: #000;
        }
      }
      
    }
    .logoContainer{
      width: auto;
      height: 140px;
      margin: 30px;
      img{
        width: auto;
        height: 100%;
      }
    }

  }
`


//MAIN COMPONENT
function App() {
  return (
    <>
    
      <GlobalStyle/>
      {/* <BackgroundColor /> */}
      <MainContainer>

        <Header>
          <div className="headerContainer">

            <ul className="menu">
              <li>
                <NavLink className="link" activeClassName="link-active" exact to="/">Short&nbsp;Films</NavLink>
              </li>
              <li>
                <NavLink className="link" activeClassName="link-active" to="/commercials">Commercials</NavLink>
              </li>
              <li>
                <NavLink className="link" activeClassName="link-active" to="/about">About</NavLink>
              </li>
            </ul>

            <Link to="/">
              <div className="logoContainer">
                <img src={logo} alt="Aaron Logo" />
              </div>
            </Link>
          </div>
        </Header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/commercials">
            <Commercials />
          </Route>
          <Route exact path="/">
            <ShortFilm />
          </Route>
        </Switch>

      </MainContainer>
    </>
  )
}
export default App
