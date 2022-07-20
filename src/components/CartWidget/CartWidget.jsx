import { Link } from 'react-router-dom';
import { UseCartContext } from '../../Context/CartContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const shopCart = <FontAwesomeIcon icon={faCartShopping} className="text-white" />;

function CartWidget() {
    const { totalQuantity } = UseCartContext();
    
    return(
    <>
        { totalQuantity() === 0 ? <></>
        : 
        <Link to={`/carrito`} className='shopCart position-fixed'>
            <span className='cartTotalQuantity'>{totalQuantity()}</span>
            {shopCart}
        </Link>
        }
    </>
    )
}

export default CartWidget;