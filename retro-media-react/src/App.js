import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import Header from "./Components/Header/Header";
import MediaList from "./Components/MediaList/MediaList";
import Banner from "./Components/Banner/Banner";


const App = () => {
  const [cart, setCart] = useState([]);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState('Welcome to Retro Media!');
  const [inventory] = useState(
    [
      { "id": 1, "type": "VHS", "title": "Back to the Future", "favorite": false, "quantity": "0", "image": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"},
      { "id": 2, "type": "DVD", "title": "The Matrix", "favorite": false, "quantity": "0", "image": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
      { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson", "favorite": false, "quantity": "0", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiKIYv_urmiizMasR-xVWNvkWzmzAw-6o8nj3ZK3eeg&s" },
      { "id": 4, "type": "DVD", "title": "Thirteen Ghosts", "favorite": false, "quantity": "0", "image": "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Thir13en_Ghosts_poster.JPG/220px-Thir13en_Ghosts_poster.JPG" },
      { "id": 5, "type": "DVD", "title": "Interstellar", "favorite": false, "quantity": "0", "image": "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg" },
      { "id": 6, "type": "CD", "title": "Weakest Link - Chris Brown", "favorite": false, "quantity": "0", "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Chris_Brown_-_Weakest_Link_Cover.png/220px-Chris_Brown_-_Weakest_Link_Cover.png" },
      { "id": 7, "type": "VHS", "title": "The Brave Little Toaster", "favorite": false, "quantity": "0", "image": "https://upload.wikimedia.org/wikipedia/en/0/05/Brave_Little_Toaster_poster.jpg" },
      { "id": 8, "type": "VHS", "title": "Flirting Scholar", "favorite": false, "quantity": "0", "image": "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Flirting-Scholar-poster.jpg/220px-Flirting-Scholar-poster.jpg" },
      { "id": 9, "type": "DVD", "title": "Kung Fu Hustle", "favorite": false, "quantity": "0", "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/KungFuHustleHKposter.jpg/220px-KungFuHustleHKposter.jpg" },
      { "id": 10, "type": "DVD", "title": "The Notebook", "favorite": false, "quantity": "0", "image": "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg" }
    ]
  );

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    setMessage(`Added ${item.title} to cart.`);
  };

  const removeFromCart = (item, index) => {
    const newCart =  cart.filter((item, i) => i !== index);
    setCart(newCart);
    setMessage(`Removed ${item.title} from cart.`);
  };

  const toggleFavoriteItem = (item) => {
    item.favorite = !item.favorite;
    if(item.favorite === true){
      setMessage(`${item.title} has been added to your favorites!`);
    }else {
      setMessage(`${item.title} has been removed from your favorites!`);
    };
    favoritesList(inventory);
  };

  const favoritesList = (inventory) => {
    setFavorites(inventory.filter(item => item.favorite === true));
  }

  const toggleCartVisibility = () => {
    console.log(cartVisibility);
    setCartVisibility(!cartVisibility);
    console.log(cartVisibility);
    cartVisibility === true ? document.getElementById("shopping-cart-container").style.visibility = "visible" : document.getElementById("shopping-cart-container").style.visibility = "hidden";
  }

  return (
    <Router>
      <div id='app-container'>
        <Header cart={cart} toggleCartVisibility={toggleCartVisibility} removeFromCart={removeFromCart} />
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/vhs'>VHS</Link></li>
            <li><Link to='/dvd'>DVD</Link></li>
            <li><Link to='/CD'>CD</Link></li>
          </ul>
        </nav>
        <Banner message={message} />
        <Routes>
          <Route path='/' element={<MediaList inventory={inventory} addToCart={addToCart} removeFromCart={removeFromCart} favorites={favorites}toggleFavoriteItem={toggleFavoriteItem} />} exact/>
          <Route path='/vhs' element={<MediaList inventory={inventory.filter(item => item.type === 'VHS')} addToCart={addToCart} favorites={favorites} toggleFavoriteItem={toggleFavoriteItem} />} exact/>
          <Route path='/dvd' element={<MediaList inventory={inventory.filter(item => item.type === 'DVD')} addToCart={addToCart} favorites={favorites} toggleFavoriteItem={toggleFavoriteItem} />} exact/>
          <Route path='/cd' element={<MediaList inventory={inventory.filter(item => item.type === 'CD')} addToCart={addToCart} favorites={favorites} toggleFavoriteItem={toggleFavoriteItem} />} exact/>
        </Routes>
        {/* {favorites.length > 0 ? <FavoritesList favorites={favorites} toggleFavoriteItem={toggleFavoriteItem} addToCart={addToCart}/> : <></>} */}
        {/* <MediaList inventory={inventory} addToCart={addToCart} removeFromCart={removeFromCart} favorites={favorites} toggleFavoriteItem={toggleFavoriteItem}/> */}
      </div>
    </Router>
  )
}

export default App;
