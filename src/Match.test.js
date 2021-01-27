import { render, waitFor } from '@testing-library/react';
import MatchList from './components/MatchList/MatchList'
import axios from 'axios'


test("Checks whether the message appears on the profile screen", async ()=> {
  axios.get = jest.fn().mockResolvedValue({data: {matches: []}}) 
  const {getByText}= render(<MatchList/>)  


  expect(getByText(/Desculpe, ainda não temos Matches/)).toBeInTheDocument()

  expect(axios.get).toBeCalledWith("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:deborah/matches") 
  
  await waitFor( () => {})
})












/* O que testar
1-requisição
2-mensagem da paginas de nao match
4-loading do material? tem como testar?
*/