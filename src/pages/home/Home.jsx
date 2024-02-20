import './Home.scss'
import Banner from '../../components/banner/Banner'
import CardsDisplay from '../../components/cardsDisplay/CardsDisplay'

function Home({ logements }) {

  return (
    <div className="homepage__container">
        <Banner />
        <CardsDisplay logements={logements} />
    </div>
  )
}

export default Home