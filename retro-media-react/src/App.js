import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MediaList from "./Components/MediaList/MediaList";

const App = () => {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState([
      { "id": 1, "type": "VHS", "title": "Back to the Future" },
      { "id": 2, "type": "DVD", "title": "The Matrix" },
      { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    console.log(`Added ${item.title}. Cart contains: `, cart);
  };

  return (
    <div>
      <Header />
      <MediaList list={inventory} addToCart={addToCart}/>
    </div>
  )
}

export default App;
