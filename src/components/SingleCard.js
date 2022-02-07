import './SingleCard.css';

export default function SingleCard({ card, handleChoice }) {
    const handleClickOnBack = () => {
        handleChoice(card);
    }

    return (
        <div className="card">
        <div>
          <img className="front" src={card.src} alt="card front" />
          <img 
            className="back" 
            src="/img/cover.png" 
            alt="card back"
            onClick={handleClickOnBack} />
        </div>
      </div>
    );
}
