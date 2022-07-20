import { UseCartContext } from '../../Context/CartContext.jsx';
import { Link } from 'react-router-dom';
import CartItem from './CartItem.jsx';
import './Cart.css';


export default function Cart({ product }) {
    // Using CartContext functions
    const { clear, totalPrice, totalQuantity, buyCheckout } = UseCartContext();

    return (
        <> 
                <CartItem 
                id={product.id} 
                image={product.image} 
                name={product.name} 
                price={product.price} 
                quantity={product.quantity}
                />

                <div className='allDetails'>
                    <Link to={`/verificacion`} className='buyAll' onClick={() => { buyCheckout(); clear();}}>Finalizar Compra</Link>
                    <p className='toBuyPrice'>El precio total es: <span className='styledPrice'>${totalPrice()}</span></p>
                    <p className='toBuyQuantity'>La cantidad a comprar es: <span className='styledQuantity'>{totalQuantity()}</span></p>
                    <button className='eraseAll' onClick={clear}>Vaciar el carrito</button>
                </div>
        </>
    )
}