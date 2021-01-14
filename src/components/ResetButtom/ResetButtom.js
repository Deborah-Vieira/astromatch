import React from 'react';
import axios from "axios";
import styled from "styled-components";
import Reset from '../ResetButtom/reset.png'

const Img = styled.img ` 
  width: 4%;
  align-items: center;
  margin-left: 16%;
  margin-bottom: 2%;
  cursor: pointer; `  

function ResetButtom() {
  const baseUrlReset =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:deborah/clear";

const reset = () => {
  axios
    .put(baseUrlReset)
    .then((response) => {
      alert("Resetados");
    })
    .catch((error) => {
      console.log(error);
      alert("nao resetou");
    });
};
  return (
    <div>
      <Img onClick={reset} src={Reset} />
    </div>
  );
}

export default ResetButtom;