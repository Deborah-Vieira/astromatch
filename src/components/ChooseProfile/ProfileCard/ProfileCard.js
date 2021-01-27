import React from 'react';
import styled from 'styled-components'

const ProfileContainer = styled.div ` 
  margin: 16px;
  margin-top: 4%;
  border: 1px solid gray;
  box-shadow: 2px 2px 5px 5px gray;  `

const ProfilePhoto = styled.img `
  width: 100%;
  display: block; 
  max-height: 360px; 
  `  

const ProfileInfo = styled.div ` 
  padding: 0 16px;
  color: #babace;
`


function ProfileCard(props) {
  const profile = props.profile;
  return (
     <ProfileContainer> 
          <ProfilePhoto src={profile.photo} />
       <ProfileInfo>
          <p>{profile.name},{profile.age}</p>
          <p>{profile.bio}</p>
       </ProfileInfo>      
     </ProfileContainer>
     )
}

export default ProfileCard;