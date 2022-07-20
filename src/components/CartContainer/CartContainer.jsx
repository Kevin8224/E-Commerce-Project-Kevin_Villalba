import { UseCartContext } from '../../Context/CartContext.jsx';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart.jsx';


export default function CartContainer(){
    // Using CartContext state
    const { cartList } = UseCartContext();

    return(
        <>
            <div className='cart'>
                {
                cartList.length < 1 ? // If cart is empty return empty cart screen
                <>
                <h1 className='emptyCart'>Carrito Vacío</h1>
                    <div className="go-back-container">
                        <Link to={`/`}>
                            <button className='go-back-button'>Volver</button>
                        </Link>
                    </div>
                </>
                : 
                cartList.map((list) => // 
                                <Cart key={list.id} product={list} /> 
                            )
                }
            </div>
        </>
    )
}