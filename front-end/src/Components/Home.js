import Card from "./Card";
import Carousel from "./Carousel";

function Home(){
    const cardData = [
        { title: 'Carte 1', description: 'Description de la carte 1' },
        { title: 'Carte 2', description: 'Description de la carte 2' },
        { title: 'Carte 3', description: 'Description de la carte 2' },
        { title: 'Carte 4', description: 'Description de la carte 2' },
        { title: 'Carte 5', description: 'Description de la carte 2' },
        { title: 'Carte 6', description: 'Description de la carte 2' },
        { title: 'Carte 7', description: 'Description de la carte 2' },
        { title: 'Carte 8', description: 'Description de la carte 2' },
        { title: 'Carte 9', description: 'Description de la carte 2' },
        { title: 'Carte 10', description: 'Description de la carte 2' },

              ];
    return(
        <>
            <div className="CardLayout">
            <Carousel cards={cardData} />
            
            
            </div>
        </>
    );
}

export default Home;