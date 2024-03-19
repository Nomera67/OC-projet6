import './Card.scss'
import { Link } from 'react-router-dom'

function Card({ logement }) {

  return (
    <Link to={`/housing/${logement.id}`} className="card--link">
      <div className="card">
          <img src={logement.cover} alt={logement.title} className='card__img'/>
          <h2 className='card__title'>{logement.title}</h2>
      </div>
    </Link>
  )
}

export default Card