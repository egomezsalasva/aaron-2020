//IMPORTS
//-Modules
import React, { useRef } from 'react'
import styled from 'styled-components'
import gsap from 'gsap/all'
//-Data
import { slidesCommercials } from '../../data/slidesData'
 

//STYLE
const Wrapper = styled.div`
    .sliderNav{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 12;
      height: 12px;
      width: calc(80px * ${slidesCommercials.length});
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

                &:hover{
                    transform: scale( 1, 2 );
                }
            }

            .navCurrent{
                transform: scale( 1, 1.5 );
                background: #000;
            }
        }
    }
`


//MAIN COMPONENT
const SliderNavCommercials = ({currentSlide}) => {

    const navItemTl = gsap.timeline()

    let navItemRef = [];

    let navItemRef0 = useRef(null)
    let navItemRef1 = useRef(null)
    let navItemRef2 = useRef(null)
    let navItemRef3 = useRef(null)
    let navItemRef4 = useRef(null)
    
    if(currentSlide === 0){
        navItemTl.to( navItemRef0.current, { duration: 1, y: 200 } )
    }

    return (
        <Wrapper>
            <div className="sliderNav">
                <ul className="navContainer">

                    <li className="navItem" ref={el => (navItemRef[0] = el)}>
                        <span></span>
                    </li>

                    <li className="navItem" ref={navItemRef1}>
                        <span></span>
                    </li>

                    <li className="navItem" ref={navItemRef2}>
                        <span></span>
                    </li>

                    <li className="navItem" ref={navItemRef3}>
                        <span></span>
                    </li>

                    <li className="navItem" ref={navItemRef4}>
                        <span></span>
                    </li>
                            
                </ul>
            </div>
        </Wrapper>
        
    )
}
export default SliderNavCommercials
