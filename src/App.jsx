import './App.css';
import './Card.css';
import { useState } from 'react';

const Card = ({ title, price }) => {
  const [hasLiked, sethasLiked] = useState(false);
  return (
    <div className="card">
      <h1 className="card-title">{title}</h1>
      <h3 className="card-price">{price}</h3>
      <button onClick={() => sethasLiked(!hasLiked)}>{hasLiked ? '❤️' : '🤍'}</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Card title="BMW" price="$9,000" />
      <Card title="Toyota" price="$8,900" />
      <Card title="Audi" price="$8,600" />
      <Card title="Rolls Royce" price="$19,000" />
    </div>
  );
};

export default App;