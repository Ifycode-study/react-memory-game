import { useState } from 'react';
import SingleCard from './components/SingleCard';
import './App.css';

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" }
]

function App() {
  const [ cards, setCards ] = useState([]);
  const [ turns, setTurns ] = useState(0);

  const cardsShuffle = () => {
    const duplicatedCards = [ ...cardImages, ...cardImages];
    const shuffleCards = duplicatedCards
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));
  
      setCards(shuffleCards);
      setTurns(0);
  }

  return (
    <div className="App">
      <h1>Memory game</h1>
      <button onClick={cardsShuffle}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
