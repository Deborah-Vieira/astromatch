import React from 'react';
import Coracao from './coracao-partido.jpg'
import styled from 'styled-components'

const HeartContainer = styled.h4 `
    color: #cbc;
    font-size: 20px;
    padding: 5px;
    margin-left: 5px;
    text-align: center; `

const Photo = styled.img ` 
    align-items: center;
    width: 65%;
    margin-left: 22%;`

function Loading() {
  return (
      <div><HeartContainer>Desculpe, ainda não temos Matches.</HeartContainer>
      <Photo src ={Coracao} />
      </div>
  );
}

export default Loading;