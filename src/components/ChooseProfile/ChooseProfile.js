import React, {useState, useEffect } from 'react';
import ProfileCard from '../ChooseProfile/ProfileCard/ProfileCard'
import ChooseButton from '../ChooseProfile/ChooseButtom/ChooseButtom'
import { baseUrl, baseUrlChoosePerson } from "../Constantes/Constantes"
import LinearProgress from '@material-ui/core/LinearProgress'
import axios from 'axios'


function ChooseProfile() {
   const [profileChoose, setProfileChoose] = useState(undefined)

    const getPeople = () => {
        axios
        .get(baseUrl)
        .then((response) => {
            setProfileChoose(response.data.profile);
             
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        getPeople()         
    }, []);   


    const choosePerson = (choice) => {
    const body = {
        id: profileChoose.id,
        choice: choice,
    };
    setProfileChoose(undefined)
    

    axios
        .post(baseUrlChoosePerson, body)
        .then((response) => {
        getPeople();
        })
        .catch((error) => {
        console.log(error);
        });
    };

    const onClickNo = () => {
        choosePerson(false)
    }

    const onClickYes = () => {
    choosePerson(true)
    }


    return (
     <div>   
      { profileChoose  ?
       (<>
     <ProfileCard profile = {profileChoose}/> 
     <ChooseButton onClickNo={onClickNo} onClickYes={onClickYes}/>
    </>  ): <LinearProgress color='secondary'/>
        }
    </div>
    )

}

export default ChooseProfile;