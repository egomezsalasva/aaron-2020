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

  const slideRef01 = useRef()
  const slideRef02 = useRef()
  const slideRef03 = useRef()
  const slideRef04 = useRef()

  const listSlideRefs = [slideRef01, slideRef02, slideRef03, slideRef04]

  useEffect(() => {
    listSlideRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          filter: 'blur(2px)'
        },
        {
          duration: 1.2,
          ease: 'power2',
          filter: 'blur(0px)',
          scale: 1.2,
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'left',
            toggleActions: 'play none none none',
            horizontal: true
          }
        }
      )
    })
  }, [])


  return (
    <Wrapper>

      <Top/>

      <Bottom/>

      <div className="sliderCompositionContainer">

          <div className="slider">

          <div className="firstHalfSlide">
              
            </div>

            <div className="slide" ref={el => slideRef01 = el}>
              <div className="slideTop">
                <div className="title">This Is Brotherhood</div>
                <div className="client">Brotherhood</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={brotherhoodImg} alt="Brotherhhod" />
              </div>
            </div>

            <div className="slide" ref={el => slideRef02 = el}>
              <div className="slideTop">
                  <div className="title">Rafa Nadal</div>
                  <div className="client">Kia</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={rafaNadalImg} alt="Huevos Fritos" />
              </div>
            </div>

            <div className="slide" ref={el => slideRef03 = el}>
              <div className="slideTop">
                  <div className="title">Rolling</div>
                  <div className="client">Rizla</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={rollingImg} alt="Huevos Fritos" />
              </div>
            </div>

            <div className="slide" ref={el => slideRef04 = el}>
              <div className="slideTop">
                  <div className="title">Rolling</div>
                  <div className="client">Rizla</div>
              </div>
              <div className="slideImageContainer">
                <img className="slideImage" src={rollingImg} alt="Huevos Fritos" />
              </div>
            </div>

          </div>

          <SliderNavCommercials />

      </div>

    </Wrapper>
  )
}
export default Commercials
