import React, { useState, useEffect } from "react";
import MatchListItem from './MatchListItem/MatchListItem';
import {baseUrlMatchs} from '../Constantes/Constantes'
import Coracao from '../MatchList/MatchListItem/Loading/Loading'
import axios from 'axios'
import styled from 'styled-components'

const ListContainer = styled.div `
  padding: 8px;
`

function MatchList() {
  const [matches, setMatchs] = useState([])

   useEffect(() => {
   getMatchsList()    
  }, []);   

  const getMatchsList = () => {
    axios
      .get(baseUrlMatchs)
      .then((response) => {
        setMatchs(response.data.matches);
        console.log("matches", matches)
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return  (    
    <div>
        { matches.length !== 0 ? (
          <>
        <ListContainer>
          {matches.map((profile) => {
            return <MatchListItem profile ={profile}/>
          })}      
        </ListContainer>   
        </> ): <Coracao/>
      }
    </div> 
  )

  
}





export default MatchList;

 