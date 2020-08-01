//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
 

//STYLE
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  margin-left: 30px;
  .top{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 42;
    margin: 30px;
    span{
      font-family: 'GTHaptikTrial-Regular';
      font-size: 14px;
    }
    .availabiity{
      position: absolute;
      right: 0;
    }
  }
  .bottom{
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 30px;
    font-size: 14px;
  }
  .sliderContainer{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    .slider{
      transform: translate3d(0,0,0);
      will-change: transform;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      align-items: center;
      .sliderInnerWrapper{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-content: center;
        overflow: hidden;
      }
      .sliderNav{
        position: absolute;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 12;
        bottom: 0;
        height: 15px;
        width: calc(80px * 2);
        margin: 30px auto;
        .navContainer{
          display: flex;
          list-style: none;
          padding: 0;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          .navItem{
            backface-visibility: hidden;
            transform-style: preserve-3d;
            will-change: transform;
            cursor: pointer;
            height: 4px;
            flex: 0 1 auto;
            width: 100%;
            transition: transform .6s;
            background:#BFBEB7;
            margin: 0 2px;
          }
          .navCurrent{
            transform: scale(1,1.5);
            background: #000;
          }
        }
      }
    }

  }
`


//MAIN COMPONENT
const ShortFilm = () => {
  return (
    <Wrapper>

      <div className="top">
          <span>Film Director</span>
          <span className="availabiity">available from - sep 2020</span>
      </div>

      <div className="bottom">
        contact me
      </div>

      <div className="sliderContainer">
        <div className="slider">

          <div className="sliderInnerWrapper">

          </div>

          <div className="sliderNav">
            <ul className="navContainer">
              <li className="navItem navCurrent">
                <span></span>
              </li>
              <li className="navItem">
                <span></span>
              </li>            
            </ul>
          </div>

        </div>
      </div>

    </Wrapper>
  )
}
export default ShortFilm
