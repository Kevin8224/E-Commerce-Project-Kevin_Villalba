import { UseCartContext } from '../../Context/CartContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import  './Cart.css';

// Using FontAwesome icon
const deleteItem = <FontAwesomeIcon icon={faTrashCan} />

 // Card in cartList
export default function CartItem({ id, image, name, price, quantity }) {
    // Using CartContext function
    const { removeItem } = UseCartContext();

    return(
        <div className='item'>
            <div className='imageContainer'>
                <img className='image'
                    src={image}
                    alt="Cargando comida" />
            </div>
            <div className='infoCart'>
                <h2 className='itemName'>{name}</h2>
                <p className='itemPrice'>${price * quantity}</p>
                <h5 className='itemQuantity'>
                    Cantidad: {quantity}
                </h5>
            </div>
            <div className='delete' onClick={() => removeItem(id)}>{deleteItem}</div>
        </div>
    )
}