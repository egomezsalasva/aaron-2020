//IMPORTS
//-Modules
import React, { useRef, useEffect  } from 'react'
import styled from 'styled-components'
import gsap from 'gsap/all'
// import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Components
import SliderNavCommercials from './short-films/SliderNavCommercials'
import Top from './short-films/Top'
import Bottom from './short-films/Bottom'
//-Images
import brotherhoodImg from '../images/brotherhood.png'
import rafaNadalImg from '../images/rafaNadal.png'
import rollingImg from '../images/rolling.png'
 

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
      width: calc(((60vw + 40px) * 4));
      height: 100%;
      align-items: center;
      display: flex;
      align-items: center;
      justify-content: center;

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
const Commercials = () => {

  return (
    <>
        <div className="slide" ref={el => slideRef01 = el}>
            <div className="slideTop">
            <div className="title">This Is Brotherhood</div>
            <div className="description">Brotherhood</div>
            </div>
            <div className="slideImageContainer">
            <img className="slideImage" src={brotherhoodImg} alt="Fire" />
            </div>
        </div>
    </>
  )
}
export default Slide
