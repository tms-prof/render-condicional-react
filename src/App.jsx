import useState from 'react';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';

export default function App() {
  const [pagina, setPagina] = useState('inicio');

  return (
    <>
    <button onClick={() => setPagina('inicio')}>Inicio</button>
    <button onClick={() => setPagina('sobre')}>Sobre</button> 
    {pagina === 'inicio' ? <Inicio /> : <Sobre />} 

    
    </>
  );
}

