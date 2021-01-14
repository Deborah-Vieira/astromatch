import { render, screen, wait, waitFor } from '@testing-library/react';
import App from './App';
import MatchList from './components/MatchList/MatchList'
import axios from 'axios'

//preparação
//execucao 
test("Verifica se o loading aparece em tela profile", async ()=> {
  axios.get = jest.fn().mockResolvedValue({data: {matches: []}}) 
  const {getByText}= render(<MatchList/>)  

//verificação
  expect(getByText(/Desculpe, ainda não temos Matches/)).toBeInTheDocument()

  //verificar se a função foi chamada
  /* expect(axios.get).
  toBeCalledWith("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:deborah/matches") */
  await waitFor( () => {})
})












/* O que testar
1-requisição
2-mensagem da paginas de nao match
4-loading do material? tem como testar?
*/