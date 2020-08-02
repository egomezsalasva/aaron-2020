//IMPORTS
//-Modules
import React from 'react'
import styled from 'styled-components'


//STYLE
const Wrapper = styled.div`
    .bottom{
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 30px;
        font-size: 14px;
    }
`


//MAIN COMPONENT
const Bottom = () => {
  return (
    <Wrapper>
      <div className="bottom">contact me</div>
    </Wrapper>
  )
}
export default Bottom
