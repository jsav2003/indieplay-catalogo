import { motion } from 'framer-motion'

function GameCard({ imagen, titulo, estudio }) {
  return (
    <motion.article
      className="game-card liquid-glass"
      initial={{ filter: 'blur(14px)', opacity: 0, y: 24 }}
      animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <img className="game-card__imagen" src={imagen} alt={titulo} />
      <div className="game-card__cuerpo">
        <h3 className="game-card__titulo">{titulo}</h3>
        <p className="game-card__estudio">{estudio}</p>
        <button className="game-card__boton liquid-glass">Ver Detalles</button>
      </div>
    </motion.article>
  )
}

export default GameCard
