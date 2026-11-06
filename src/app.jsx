import { useState } from 'preact/hooks'
import { Link } from 'react-router-dom'

//components 
import Menu  from './components/Menu.jsx'
import Rodape  from './components/Rodape.jsx'
import './app.css'


export function App() {
  const [rodape, setRodape] = useState(
    [
      {
        nome: 'Marcilio',
      },
      {
        nome: 'Bruno',
      },
      {
        nome: 'Gustavo',
      },
    ]
  );
  const [menu, setMenu] = useState([
    {
      valor: '1',
    },
    {
      valor: '2',
    },
    {
      valor: '3',
    },
  ]);

  return (
    <>
      <Menu menu={menu}/>
      <Rodape rodape={rodape}/>
      <div>
        <label>Nome: </label>
        <input type="text" />
      </div>
      <br></br>
      <button className="btn" onClick={()=> {
        let nome = document.querySelector('input').value;
        setRodape([...rodape, { nome: nome }]);
      }}>+</button>
      <br></br>
      <Link to="/teste">Ir para Teste</Link>
      <h3>Lista de Nomes</h3>

      <div>{rodape.map((item) => (
        <p>{item.nome}</p>
      ))}</div>
    </>
  )
}
