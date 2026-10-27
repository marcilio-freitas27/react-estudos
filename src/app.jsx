import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

//components 
import Menu  from './components/Menu.jsx'
import Rodape  from './components/Rodape.jsx'
import './app.css'

export function App() {
  const [count, setCount] = useState(0);
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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <Rodape rodape={rodape}/>
    </>
  )
}
