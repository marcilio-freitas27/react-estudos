import { useState } from 'preact/hooks'

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
    </>
  )
}
