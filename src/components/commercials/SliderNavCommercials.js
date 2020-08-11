//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
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
const SliderNavCommercials = () => {

    // const [currentSlide, setCurrentSlide] = useState(0)


    return (
        <Wrapper>
            <div className="sliderNav">
                <ul className="navContainer">

                    {/* <li className="navItem navCurrent">
                        <span></span>
                    </li> */}

                    {slidesCommercials.map( slide => {
                        return  <li className={"navItem"} key={slide.id}>
                                    <span></span>
                                </li>
                    })}
                            
                </ul>
            </div>
        </Wrapper>
        
    )
}
export default SliderNavCommercials
