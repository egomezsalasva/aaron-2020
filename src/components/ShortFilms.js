//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
// import gsap from 'gsap/all'
// import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Components
import SliderNavShortFilm from './short-films/SliderNavShortFilm'
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

        .slideTop{
          position: relative;
          z-index: 50;
          width: 60vw;
          /* transform: translateY(-25px); */
          transform: translateY(0px);

          .title{
            position: absolute;
            left: 0;
            display: inline-block;
            font-family: 'GTHaptikTrial-Medium';
            font-size: 14px;
          }
          .description{
            position: absolute;
            right: 0;
            display: inline-block;
            cursor: pointer;
            font-family: 'GTHaptikTrial-Regular';
            font-size: 12px;
          }
        }

        .slideImageContainer{
          position: relative;
          z-index: 100;
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

  // const slideTl = gsap.timeline()

  // const huevosFritosClickHandler = () => {
  //   console.log("test")
  //   slideTl.to(".slider", { x: "-30vw", duration: 1, })
  // }


  return (
    <Wrapper>

      <Top/>

      <Bottom/>

      <div className="sliderCompositionContainer">

          <div className="slider">

            <div className="slide">
              <div className="slideTop">
                <div className="title">Fire</div>
                <div className="description"><span>+</span>&nbsp; decription</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={fireImg} alt="Fire" />
              </div>
            </div>

            <div className="slide">
              <div className="slideTop">
                  <div className="title">Huevos Fritos</div>
                  <div className="description"><span>+</span>&nbsp; decription</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={huevosFritos} alt="Huevos Fritos" />
              </div>
            </div>

          </div>

          <SliderNavShortFilm />

      </div>

    </Wrapper>
  )
}
export default ShortFilm
