import React,{ useState} from 'react';
import AppBar from '../AppBar/AppBar'
import ChooseProfile from '../ChooseProfile/ChooseProfile'
import MatchList from '../MatchList/MatchList';
import styled from 'styled-components'

const ContainerMain = styled.div `
  border: 2px solid gray;
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin:30px;
`
 

function Main() {
 const [ChangeScreen, setChangeScreen] = useState("profile");

 const changeStateProfile = () => {
  setChangeScreen("profile");
};

 const changeStateMatch = () => {
    setChangeScreen("match");
  };

 
  const showScreen = () => {
    switch (ChangeScreen) {
      case "profile":
        return <ChooseProfile />;
      case "match":
        return <MatchList />;
      default:
        return <ChooseProfile />;
    }
  }; 

    return <>
    <ContainerMain>
     <AppBar changeStateProfile={changeStateProfile} 
      changeStateMatch={changeStateMatch}/>   
       {showScreen()}
   </ContainerMain>
     
    
  </>;
}

export default Main;