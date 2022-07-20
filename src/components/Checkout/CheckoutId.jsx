import { useState } from "react";

export default function CheckoutId({ data, id }) {
    // State to use as true/false condition
    const [showProducts, setShowProducts] = useState(false);

    return(
            <>
                <div className="order-screen">
                        <div className="order-details">
                                <h3>Tu número de orden es: {id}</h3> {/*Firebase random order id*/}
                                <p>El precio total es: <b>${data.total}</b></p>
                            <hr/>
                        </div>

                        <>
                        {!showProducts ? // Will show products list if showProducts === true
                            <button onClick={()=> setShowProducts(true)} className="btn-show-action">Ver productos</button>  
                         :
                           <div className="list-bought">
                                <button className="btn-close-action" onClick={()=> setShowProducts(false)}>Cerrar</button>
                                <h3 className="text-white">Productos comprados:</h3>
                                {
                                data.item.map((prod) => // Showing all bought products in list
                                    <ul key={prod.id}>
                                        <li className="products-bought">Producto: {prod.name}</li>
                                        <li className="products-bought">Cantidad: {prod.quantity}</li>
                                        <li className="products-bought">Precio total: ${prod.price}</li>
                                    </ul>
                                )
                                }   
                           </div>                               
                        }
                        </>
                        
                        <hr/>
                        <h6 className="text-center mt-2">Gracias por comprar en Sábrium!</h6>
                    </div>
            </>
        )
}