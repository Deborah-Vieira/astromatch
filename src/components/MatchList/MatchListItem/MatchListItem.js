
import React from 'react';
import styled from 'styled-components';

// import { Container } from './styles';

const ListItemContainer = styled.div `
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cbc;

  :hover{
    background-color: #e7505e;
  }`

 const Avatar =  styled.img ` 
  border-radius: 50%;
  margin-right: 8px;
  width: 40px;
  height: 40px;
 ` 

function MatchListItem(props) {
  const profile = props.profile
    return <div>
    <ListItemContainer>
      <Avatar src={profile.photo} />
      <p>{profile.name}</p>
    </ListItemContainer>    
  </div>;
}

export default MatchListItem;