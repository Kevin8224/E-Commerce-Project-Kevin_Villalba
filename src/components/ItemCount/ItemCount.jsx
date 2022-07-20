import './ItemCount.css'; // Custom css
import { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd, foodName}) {
    const [count, setCount] = useState(initial);
 
    // Add 1 prod quantity
    const add = () => count === stock ? <></> : setCount(count + 1);

    // Remove 1 prod quantity
    const remove = () => count === 1 ? <></> : setCount(count - 1);

    // Function to set onAdd with count(product quantity)
    function addQuantity () {
        onAdd(count) // Will be used in CartContext
    }

    return(
        <div className="countCard">
            <div className="add">
                <h5 className="foodName">{foodName}</h5>
                <div className='d-flex'>
                <button className='actions sustractButton' onClick={() => remove()}>-</button>
                <div className="productQuantity">{count}</div>
                <button className='actions addButton' onClick={() => add()}>+</button>
                </div>
                <button className='addToCart' onClick={addQuantity}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
