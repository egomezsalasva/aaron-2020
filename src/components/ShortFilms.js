//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
//-Components
import SliderNav from './short-films/SliderNav'
import Top from './short-films/Top'
import Bottom from './short-films/Bottom'
//-Images
import fireImg from '../images/Fire.png'
import huevosFritos from '../images/huevosFritos.png'
 

//STYLE
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
  margin-top: 0;
  margin-left: 30px;

  .sliderCompositionContainer{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;

    .slider{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      align-items: center;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      transform: translateX(calc((60vw / 2) - 0vw));

      .slide{
        padding: 20px;

        .slideImageContainer{
          width: 60vw;
          height: 439px;
          box-shadow: 0 30px 33px -25px rgba(0,0,0,.7);

          .slideImage{
            width: 100%;
            height: 100%;
            object-fit: cover;
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

      <Top/>

      <Bottom/>

      <div className="sliderCompositionContainer">

          <div className="slider">

            <div className="slide">
              <div className="slideTop">

              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={fireImg} alt="Fire" />
              </div>
            </div>

            <div className="slide">
              <div className="slideImageContainer">
                <img className="slideImage" src={huevosFritos} alt="Huevos Fritos" />
              </div>
            </div>


          </div>

          <SliderNav/>

      </div>

    </Wrapper>
  )
}
export default ShortFilm
