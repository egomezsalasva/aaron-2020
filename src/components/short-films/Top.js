//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'
 

//STYLE
const Wrapper = styled.div`
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
`


//MAIN COMPONENT
const Top = () => {
  return (
    <Wrapper>
      <div className="top">
          <span>Film Director</span>
          <span className="availabiity">available from - sep 2020</span>
      </div>
    </Wrapper>
  )
}
export default Top
