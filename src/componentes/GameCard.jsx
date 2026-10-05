function GameCard({ imagen, titulo, estudio }) {
  return (
    <article className="game-card">
      <img className="game-card__imagen" src={imagen} alt={titulo} />
      <div className="game-card__cuerpo">
        <h3 className="game-card__titulo">{titulo}</h3>
        <p className="game-card__estudio">{estudio}</p>
        <button className="game-card__boton">Ver Detalles</button>
      </div>
    </article>
  )
}

export default GameCard
