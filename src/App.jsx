import Header from './componentes/Header.jsx'
import Sidebar from './componentes/Sidebar.jsx'
import GameCard from './componentes/GameCard.jsx'

function App() {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main className="dashboard__contenido">
        <h2 className="dashboard__subtitulo">Juegos destacados</h2>
        <section className="dashboard__grid">
          <GameCard imagen="/img/juego1.svg" titulo="Nebula Drifter" estudio="Starlight Studio" />
          <GameCard imagen="/img/juego2.svg" titulo="Tidal Echoes" estudio="Azul Games" />
          <GameCard imagen="/img/juego3.svg" titulo="Mossy Hollow" estudio="Little Fern" />
          <GameCard imagen="/img/juego4.svg" titulo="Ember Run" estudio="Brasa Interactive" />
          <GameCard imagen="/img/juego5.svg" titulo="Pixel Phantoms" estudio="Neon Owl" />
          <GameCard imagen="/img/juego6.svg" titulo="The Last Keyhole" estudio="Cerrojo Labs" />
        </section>
      </main>
    </div>
  )
}

export default App
