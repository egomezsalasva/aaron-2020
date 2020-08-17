//IMPORTS
//-Modules
import React, { useState, useRef, useEffect  } from 'react'
import styled from 'styled-components'
import gsap from 'gsap/all'
// import { ScrollTrigger } from "gsap/ScrollTrigger"
//-Components
// import SliderNavCommercials from './commercials/SliderNavCommercials'
import Top from './short-films/Top'
import Bottom from './short-films/Bottom'
//-Data
 import { slidesCommercials } from '../data/slidesData'
//  import playCursor from '../images/triangleCursor.png'

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

    .sliderNav{
      position: absolute;
      left: calc(50% - 30vw);
      right: 0;
      bottom: 33px;
      width: 60vw;
      height: 20px;

      .navContainer{
        position: absolute;
        list-style: none;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        overflow: hidden;
        display: flex;

        .navItem{
          display: inline-block;
          width: 80px;
          height: 20px;
          margin: 0 2px;
          overflow: hidden;
          transform: translateY(3px);

          span{
            position: absolute;
            bottom: 0;
            width: 80px;
            height: 12px;
            background: #BFBEB7;
            transform: translateY(5px);
          }
        }
      }
    }

  }
`



//MAIN COMPONENT
const Commercials = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  let sliderRef = useRef(null)
  const slideTl = gsap.timeline({paused: true})
  const textTl = gsap.timeline()
  const navTl = gsap.timeline()

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
    const animateToNextSlide = () => {
      if(currentSlide < (slidesCommercials.length - 1)){
          slideTl.to(sliderRef.current, { duration: 1, x: `-=${calcSlideWidth}` }).play()
          setCurrentSlide(currentSlide + 1)
      }  
    }
    const animateToPrevSlide = () => {
      if(currentSlide > 0 ){
          slideTl.to(sliderRef.current, { duration: 1, x: `+=${calcSlideWidth}` }).play()
          setCurrentSlide(currentSlide - 1)
      } 
    }

    // const wheelHandler = e => {
    //   if( e.deltaY > 0 ){
    //     if(!slideTl.isActive()){
    //       animateToNextSlide()
    //     } 
    //   } else if ( e.deltaY < 0 ){
    //     e.preventDefault()
    //     animateToPrevSlide()
    //   }
    // }

  //TODO If timeline is animating stop handlers



  let infoRef0 = useRef()
  let infoRef1 = useRef()
  let infoRef2 = useRef()
  let infoRef3 = useRef()
  let infoRef4 = useRef()
  let navItemRef0 = useRef()
  let navItemRef1 = useRef()
  let navItemRef2 = useRef()
  let navItemRef3 = useRef()
  let navItemRef4 = useRef()
  const listOfNavItemRefs = [navItemRef0, navItemRef1, navItemRef2, navItemRef3, navItemRef4]
  //First Slide Autoanimate titles
    // useEffect( () => {
    //   textTl.to( infoRef01.current , { duration: 1, y: "-25px"})
    // }, [])
  //

  // useEffect(() => {
  //   let test = document.querySelector(".slide0")
  //   console.log(test)
  //   if(currentSlide === 0){
  //     test.style.cursor = 'url("https://aarondormer.netlify.app/images/playCursor.png")'
  //   } else {
  //     test.style.cursor = "pointer"
  //   }
  // }, [currentSlide])

  textTl.addLabel("delay01", "+=0.5")

  if(currentSlide === 0){
    textTl.to( infoRef1.current, { duration: 1, y: "0px"})
          .to( infoRef0.current, { duration: 1, y: "-25px"}, "delay01")
    navTl.to( listOfNavItemRefs[0].current, { duration: 0.75, transform: "translateY(3px)", background: "black" })
          // .to( listOfNavItemRefs.splice(1))
  }

  if(currentSlide === 1){
    textTl.to( infoRef0.current , { duration: 1, y: "0px"})    
          .to( infoRef1.current , { duration: 1, y: "-25px"}, "delay01")
          .to( infoRef2.current , { duration: 1, y: "0px"}, "-=1.5")
  }
  if(currentSlide === 2){
    textTl.to( infoRef1.current , { duration: 1, y: "0px"})
          .to( infoRef2.current , { duration: 1, y: "-25px"}, "delay01")
          .to( infoRef3.current , { duration: 1, y: "0px"}, "-=1.5")
  }
  if(currentSlide === 3){
    textTl.to( infoRef2.current , { duration: 1, y: "0px"})
          .to( infoRef3.current , { duration: 1, y: "-25px"}, "delay01")
          .to( infoRef4.current , { duration: 1, y: "0px"}, "-=1.5")
  }
  if(currentSlide === 4){
    textTl.to( infoRef3.current , { duration: 1, y: "0px"})
          .to( infoRef4.current , { duration: 1, y: "-25px"}, "delay01")
  }

  return (
    <Wrapper>

      <Top/>

      <Bottom/>

      <div className="sliderCompositionContainer">

        <div className="nextTransparentClick" onClick={ !slideTl.isActive() ? animateToNextSlide : null }></div>
        <div className="prevTransparentClick" onClick={() => {animateToPrevSlide()}}></div>

        <div className="slider" ref={sliderRef}>

          <div className="slide">
            <div className="slideTop" ref={infoRef0} style={{transform: `translateY(-25px)`}}>
              <div className="title">{slidesCommercials[0].title}</div>
              <div className="client">{slidesCommercials[0].client}</div>
            </div>
            <div className="slideImageContainer slide0">
              <img className="slideImage" src={slidesCommercials[0].img} alt={slidesCommercials[0].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef1}>
                <div className="title">{slidesCommercials[1].title}</div>
                <div className="client">{slidesCommercials[1].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[1].img} alt={slidesCommercials[1].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef2}>
                <div className="title">{slidesCommercials[2].title}</div>
                <div className="client">{slidesCommercials[2].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[2].img} alt={slidesCommercials[2].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef3}>
                <div className="title">{slidesCommercials[3].title}</div>
                <div className="client">{slidesCommercials[3].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[3].img} alt={slidesCommercials[3].imgAlt} />
            </div>
          </div>

          <div className="slide">
            <div className="slideTop" ref={infoRef4}>
                <div className="title">{slidesCommercials[4].title}</div>
                <div className="client">{slidesCommercials[4].client}</div>
            </div>
            <div className="slideImageContainer">
              <img className="slideImage" src={slidesCommercials[4].img} alt={slidesCommercials[4].imgAlt} />
            </div>
          </div>

        </div>

        {/* <SliderNavCommercials currentSlide={currentSlide}/> */}
        <div className="sliderNav">
          <ul className="navContainer">
            <li className="navItem"><span ref={navItemRef0}></span></li>

            <li className="navItem" ref={navItemRef1}>
                <span></span>
            </li>

            <li className="navItem" ref={navItemRef2}>
                <span></span>
            </li>

            <li className="navItem" ref={navItemRef3}>
                <span></span>
            </li>

            <li className="navItem" ref={navItemRef4}><span></span></li>         
          </ul>
        </div>

      </div>

    </Wrapper>
  )
}
export default Commercials
