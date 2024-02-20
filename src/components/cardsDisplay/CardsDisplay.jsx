import './CardsDisplay.scss';
import Card from "../card/Card";

function CardsDisplay({ logements }) {
  return (
    <div className="display">
      {logements.map(logement => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}

export default CardsDisplay;