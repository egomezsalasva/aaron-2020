//IMPORTS
//-Modules
import React, { useRef, useEffect  } from 'react'
import styled from 'styled-components'
import gsap from 'gsap/all'
// import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Components
import SliderNavCommercials from './commercials/SliderNavCommercials'
import Top from './short-films/Top'
import Bottom from './short-films/Bottom'
//-Data
 import { slidesCommercials } from '../data/slidesData'

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
          .client{
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
    <Wrapper>

      <Top/>

      <Bottom/>

      <div className="sliderCompositionContainer">

          <div className="slider">

          <div className="firstHalfSlide">
              
            </div>

            <div className="slide">
              <div className="slideTop">
                <div className="title">{slidesCommercials[0].title}</div>
                <div className="client">{slidesCommercials[0].client}</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={slidesCommercials[0].img} alt={slidesCommercials[0].imgAlt} />
              </div>
            </div>

            <div className="slide">
              <div className="slideTop">
                  <div className="title">{slidesCommercials[1].title}</div>
                  <div className="client">{slidesCommercials[1].client}</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={slidesCommercials[1].img} alt={slidesCommercials[1].imgAlt} />
              </div>
            </div>

            <div className="slide">
              <div className="slideTop">
                  <div className="title">{slidesCommercials[2].title}</div>
                  <div className="client">{slidesCommercials[2].client}</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={slidesCommercials[2].img} alt={slidesCommercials[2].imgAlt} />
              </div>
            </div>

            <div className="slide">
              <div className="slideTop">
                  <div className="title">{slidesCommercials[3].title}</div>
                  <div className="client">{slidesCommercials[3].client}</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={slidesCommercials[3].img} alt={slidesCommercials[3].imgAlt} />
              </div>
            </div>

            <div className="slide">
              <div className="slideTop">
                  <div className="title">{slidesCommercials[4].title}</div>
                  <div className="client">{slidesCommercials[4].client}</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={slidesCommercials[4].img} alt={slidesCommercials[4].imgAlt} />
              </div>
            </div>

          </div>

          <SliderNavCommercials />

      </div>

    </Wrapper>
  )
}
export default Commercials
