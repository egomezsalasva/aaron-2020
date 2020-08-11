//IMPORTS
//-Modules
import React, { useState, useRef, useEffect  } from 'react'
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


    .prevTransparentClick{
      position: absolute;
      height: 439px;
      z-index: 500;
      left:0;
      top: calc(50% - (439px / 2));
      background: red;
      opacity: 0;
    }

    .nextTransparentClick{
      position: absolute;
      height: 439px;
      z-index: 500;
      right:0;
      top: calc(50% - (439px / 2));
      background: red;
      opacity: 0;
    }

    .slider{
      position: absolute;
      top: 0;
      left: calc(50% - 30vw - 20px);
      width: calc(((60vw + 20px + 20px) * ${slidesCommercials.length}));
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .slide{
        padding: 20px;

        .slideTop{
          position: relative;
          z-index: 50;
          width: 60vw;
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

  const [currentSlide, setCurrentSlide] = useState(0)

  const slideTl = gsap.timeline()

  //Function to calculate the ViewportWidth in pixels
    const vw = (coef) => window.innerWidth * (coef/100)
  //

  //Width of the middle slide + its side margins
    const calcSlideWidth = `${vw(60) + 20 + 20}px`
  //

  //Make Transparent Buttons The Right Width
    useEffect( () => {
      const boxContainerWidth = document.querySelector(".sliderCompositionContainer").clientWidth
      const sizeOfSideSlide = (boxContainerWidth - 80 - vw(60)) / 2
      document.querySelector(".prevTransparentClick").style.width = `${sizeOfSideSlide}px`
      document.querySelector(".nextTransparentClick").style.width = `${sizeOfSideSlide}px`
    }, [])
  // TODO reload on window width resize
  

  //Animate the image slides
    const nextHandler = () => {
      if(currentSlide < (slidesCommercials.length - 1)){
        slideTl.to(".slider", { duration: 1, x: `-=${calcSlideWidth}` })
        setCurrentSlide(currentSlide + 1)
      }  
    }
    const prevHandler = () => {
      if(currentSlide > 0){
        slideTl.to(".slider", { duration: 1, x: `+=${calcSlideWidth}` })
        setCurrentSlide(currentSlide - 1)
      } 
    }
  //TODO If timeline is animating stop handlers



  let infoRef01 = useRef(null)
  let infoRef02 = useRef(null)
  let infoRef03 = useRef(null)
  let infoRef04 = useRef(null)
  let infoRef05 = useRef(null)
  //First Slide Autoanimate titles
    useEffect( () => {
      slideTl.to( infoRef01.current , { duration: 1, y: "-25px"}, "-=1")
    }, [])
  //

  if(currentSlide === 0){
    slideTl.to( infoRef02.current , { duration: 1, y: "0px"})
    slideTl.to( infoRef01.current , { duration: 1, y: "-25px"}, "-=0.75")
  }
  if(currentSlide === 1){
    slideTl.to( infoRef01.current , { duration: 1, y: "0px"})
    slideTl.to( infoRef02.current , { duration: 1, y: "-25px"}, "-=0.75")
  }


  return (
    <Wrapper>

      <Top/>

      <Bottom/>

      <div className="sliderCompositionContainer">

        <div className="nextTransparentClick" onClick={() => {nextHandler()}}></div>
        <div className="prevTransparentClick" onClick={() => {prevHandler()}}></div>

        <div className="slider">

          <div className="slide">
            <div className="slideTop" ref={infoRef01}>
              <div className="title">{slidesCommercials[0].title}</div>
              <div className="client">{slidesCommercials[0].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[0].img} alt={slidesCommercials[0].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef02}>
                <div className="title">{slidesCommercials[1].title}</div>
                <div className="client">{slidesCommercials[1].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[1].img} alt={slidesCommercials[1].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef03}>
                <div className="title">{slidesCommercials[2].title}</div>
                <div className="client">{slidesCommercials[2].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[2].img} alt={slidesCommercials[2].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef04}>
                <div className="title">{slidesCommercials[3].title}</div>
                <div className="client">{slidesCommercials[3].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[3].img} alt={slidesCommercials[3].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef05}>
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
