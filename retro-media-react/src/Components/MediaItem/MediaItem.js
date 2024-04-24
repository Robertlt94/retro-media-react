import react, {useState} from 'react';
import "./MediaItem.css";

function MediaItem() {
    const [media, setMedia] = useState([
        { "id": 1, "type": "VHS", "title": "Back to the Future" },
        { "id": 2, "type": "DVD", "title": "The Matrix" },
        { "id": 3, "type": "CD", "title": "Thriller - Michael Jackson" }
    ]);

    // item.id
    function addToCart(i) {
            // console.log(media[i].id + ' ' + media[i].title + ' (' + media[i].type + ')')
    }

    // media.map((i) => {
        return (
        // media.map((i) => {
        //     <div className="item-container">
        //         <strong>${i.title} (${i.type})</strong>
        //         <button onClick={addToCart(i)}>Add to Cart</button>
        //     </div>
        //     // console.log(item.id + ' ' + item.title + ' (' + item.type + ')')
        // })
        <div>
            <div className="item-container">
                <strong>{media[0].title} ({media[0].type})</strong>
                <button onClick={addToCart(media[0].id)}>Add to Cart</button>
            </div>
            <div className="item-container">
                <strong>{media[1].title} ({media[1].type})</strong>
                <button onClick={addToCart(media[1].id)}>Add to Cart</button>
            </div>
            <div className="item-container">
                <strong>{media[2].title} ({media[2].type})</strong>
                <button onClick={addToCart(media[2].id)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default MediaItem;