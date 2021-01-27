import React from 'react';

import styled from 'styled-components'
import Img from '../AppBar/group.svg'
import Logo from '../AppBar/logo.png'
import Pessoa from '../AppBar/profile.svg'


const ContainerAppBar = styled.div `
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #cbc;
  align-items: center;
  padding: 0 8px;
`
const ImgContainer = styled.img `
cursor: pointer;
`

function AppBar(props) {
  return <>
    <ContainerAppBar>
      <ImgContainer onClick={props.changeStateProfile} src={Pessoa} />
      <img src={Logo} width = {'45%'}/>
      <ImgContainer onClick={props.changeStateMatch} src={Img}/>
      </ContainerAppBar>

  </>;
  
}

export default AppBar;