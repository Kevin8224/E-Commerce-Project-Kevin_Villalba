import { createContext, useContext, useState } from 'react';

// Creating context
const CartContext = createContext([]);
export const UseCartContext = () => useContext(CartContext);

 // Provider
export default function CartContextProvider({ children }) {
    const [cartList, setCartList] = useState([]);
    const [checkout, setCheckout] = useState();
    
    // Adding a product to cartList
    const addToCart = (item) => {
        if(isInCart(item.id)){
            cartList.find(prod => prod.id === item.id).quantity = item.quantity;
            setCartList([...cartList])
        }else { 
            setCartList([...cartList, item]);
        }
    }

    // Filtering all products that are not equal to the clicked element and returning them in cartList
    const removeItem = (id) => {
        const items = cartList.filter(prod => prod.id !== id);
        setCartList(items);
    }


    // Clearing Cart
    const clear = () => setCartList([]);


    // Checking if the product exists
    const isInCart = (id) => cartList && cartList.some((i) => i.id === id);


    // Creating the totalPrice of products in cartList
    const totalPrice = () => {
        let total = 0;
        cartList.forEach((newProd) => {
            total += parseFloat(newProd.price) * parseInt(newProd.quantity);
        });
        return parseInt(total);
    }

    // Creating the totalQuantity of products in cartList
    const totalQuantity = () => cartList.reduce((acc, value) => acc + value.quantity, 0);


    // Creating purchase order
    const buyCheckout = () => {
        let dateOfBuy = Date();
        let order = {
            buyer: { 
                name: "", 
                phone: null, 
                email: "",
                adress: "" 
            },
            total: totalPrice(),
            date: dateOfBuy
        };
        order.item = cartList.map(prods => { 
            let id = prods.id;
            let name = prods.name;
            let price = prods.price * prods.quantity;
            let quantity = prods.quantity;
            return { id, name, price, quantity};
        })
        setCheckout(order);
    }


    return(
        <CartContext.Provider value=
          {{cartList,
            checkout,
            totalPrice,
            totalQuantity,
            clear, 
            addToCart, 
            removeItem,
            buyCheckout}}
            >
            {children}
        </CartContext.Provider>
    )
}
