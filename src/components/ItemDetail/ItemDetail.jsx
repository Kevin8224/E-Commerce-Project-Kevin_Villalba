import { useState } from 'react';
import { UseCartContext } from '../../Context/CartContext.jsx';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemCount/ConfirmationButtons.css';
import './ItemDetail.css';

export default function ItemDetail({ prod }){
    const [confirmation, setConfirmation] = useState("Add");
    const { addToCart } = UseCartContext();
    
    const onAdd = (quantity) => {
        setConfirmation("Button");
        addToCart({...prod, quantity});
    }
 
    return(
        <>
        <div className="ItemDetail">
            <div className="descFoodImage">
                <img className="img" src={prod.image} alt={prod.name}/>
            </div>
                <div className="foodInfo">
                    <h2 className="descFoodName">{ prod.name }</h2>
                      <p className="price">${ prod.price }</p>
                      <p className="foodDesc">{prod.description}</p>
                </div>
        </div>
            { 
              confirmation === "Add" ? <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} foodName={prod.name} />
             :
               <div className="btn-container">
                  <div className='btn-flex-container'>
                        <button className="go-back" onClick={()=> setConfirmation("Add")}>Volver</button>
                        <Link className='btn-to-cart links' to={`/carrito`}>Ir al carrito</Link>
                        <Link className='buy-another links' to={`/`}>Seguir comprando</Link>
                  </div>
               </div>
            }
        </>
    )
}