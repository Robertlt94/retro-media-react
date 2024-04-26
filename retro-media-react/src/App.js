import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MediaList from "./Components/MediaList/MediaList";
import FavoritesList from "./Components/FavoritesList/FavoritesList";

const App = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [inventory, setInventory] = useState(
    [
      { "id": 1, "type": "VHS", "title": "Back to the Future", "favorite": false },
      { "id": 2, "type": "DVD", "title": "The Matrix", "favorite": false },
      { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson", "favorite": false }
    ]
  );

  const addToCart = (item) => {
    setCart(cart => [...cart, item]);
  };

  const toggleFavoriteItem = (item) => {
    item.favorite = !item.favorite;
    console.log(item.favorite);
  };

  return (
    <div>
      <Header cart={cart}/>
      <FavoritesList userFavorites={favorites} toggleFavoriteItem={toggleFavoriteItem} addToCart={addToCart}/>
      <MediaList inventory={inventory} addToCart={addToCart} favorites={favorites} toggleFavoriteItem={toggleFavoriteItem}/>
    </div>
  )
}

export default App;
