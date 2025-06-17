import './App.css'
import Nav from './componentes/Nav/Nav'
import Sobre from './paginas/Sobre/Sobre'
import Projetos from './paginas/Projetos/Projetos'
import Inicio from './paginas/Inicio/Inicio'

function App() {


  return (
    <main className=" font-ft">
      <Nav />
      <Inicio/>
      <Sobre/>
      <Projetos/>
    </main>
  )
}

export default App
