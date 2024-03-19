import { useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../components/carousel/Carousel';
import Rating from '../../components/rating/Rating';
import Collapse from '../../components/collapse/Collapse';
import './Housing.scss';

function Housing({ logements }) {
  const navigate = useNavigate();
  // Récupération de l'id de logement dans l'URL
  const { id } = useParams();
  // Utilisation de find pour trouver le premier logement qui possède l'id correspondant à l'id prise dans l'URL
  const logement = logements.find(logement => logement.id === id);

  // Vérification d'un logement correspondant. Si rien n'est trouvé, redirection vers la page 404 et remplace 
  // L'URL pour empêcher l'utilisateur d'y retourner en utilisant le retour dans la navigateur
  useEffect(() => {
    if (!logement) {
      navigate('/not-found', { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="housing">
      <Carousel pictures={logement.pictures} />

      <div className="housing__informations">
        <div className="housing__main">
          <h1 className='housing__title'>{logement.title}</h1>
          <p className='housing__location'>{logement.location}</p>
          <ul className='housing__tags'>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        
        <div className="housing__secondary">
          <div className="housing__host">
            <img src={logement.host.picture} alt={logement.host.name} className="housing__img" />
            <p className='housing__name'>{logement.host.name}</p>
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      
      <div className="housing__collapses">
        <Collapse
            title='Description'
            content={logement.description}
        />

        <Collapse
          title='Équipements'
          content={logement.equipments}
        />
      </div>

      
    </div>
  )
}

export default Housing