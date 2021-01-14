import React from 'react';
import styled from 'styled-components'
import Heart from '../ChooseButtom/heart.svg'

const ContainerButtom = styled.div ` 
 display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 8px;
`

const ChooseButton = styled.button ` 
    border-radius: 60%;
    border: 6px solid #e9e9eb;    
    color: #e7505e;
    background-color:#fff;
    font-size: 24px;      
    line-height: 22px;
    padding: 13px;  
    box-sizing: border-box;
    cursor: pointer;
      
   &:hover {
       transform: skew(+20deg)
   }`

const Img = styled.img ` 
    width: 10%;
    border-radius: 60%;
    border: 6px solid #e9e9eb; 
    padding:6px;  
    cursor: pointer;  

      &:hover {
       transform: skew(-20deg)
   }`


function ChooseButtom(props) {
    return  <div>
            <ContainerButtom>
                <ChooseButton onClick={props.onClickNo}>X</ChooseButton>
                <Img onClick={props.onClickYes}src={Heart} />    
            </ContainerButtom>    
         </div>
    
}

export default ChooseButtom;