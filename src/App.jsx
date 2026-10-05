import Header from './componentes/Header.jsx'
import Sidebar from './componentes/Sidebar.jsx'
import GameCard from './componentes/GameCard.jsx'

const steam = (id) => `https://cdn.akamai.steamstatic.com/steam/apps/${id}/header.jpg`

function App() {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <main className="dashboard__contenido">
        <h2 className="dashboard__subtitulo">Juegos destacados</h2>
        <section className="dashboard__grid">
          <GameCard imagen={steam(367520)} titulo="Hollow Knight" estudio="Team Cherry" />
          <GameCard imagen={steam(504230)} titulo="Celeste" estudio="Maddy Makes Games" />
          <GameCard imagen={steam(1145360)} titulo="Hades" estudio="Supergiant Games" />
          <GameCard imagen={steam(413150)} titulo="Stardew Valley" estudio="ConcernedApe" />
          <GameCard imagen={steam(268910)} titulo="Cuphead" estudio="Studio MDHR" />
          <GameCard imagen={steam(588650)} titulo="Dead Cells" estudio="Motion Twin" />
        </section>
      </main>
    </div>
  )
}

export default App
