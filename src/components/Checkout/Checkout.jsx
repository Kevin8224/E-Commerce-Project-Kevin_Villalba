import { useState } from 'react';
import { UseCartContext } from '../../Context/CartContext.jsx';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

import CheckoutId from './CheckoutId'; 
import Form from './Form.jsx'; 

export default function Checkout() {
    // Using CartContext checkout state to make order
    const { checkout } = UseCartContext();
    const [ order, setOrder] = useState();
    const [loading, setLoading] = useState(false);
    const [verify, setVerify] = useState(false); // Verify user data

    // Setting buyer data to dataBase and checkout(list with buyer and item...) to show it in CheckoutId component
    function handleTest(e) {
        e.preventDefault(); // To prevent submit refresh

        const userGmail = e.target.gmail.value;
        const verifyGmail = e.target.verifyGmail.value;
        const userPhone = e.target.phone.value;
        const userName = e.target.name.value;
        const userAdress = e.target.adress.value;

        if(isNaN(userPhone) || userGmail !== verifyGmail){
            setVerify(true);
         } else{
            setVerify(false);
            // Setting checkout with user data
            checkout.buyer.name = userName;
            checkout.buyer.adress = userAdress;
            checkout.buyer.phone = userPhone;
            checkout.buyer.email = userGmail;

            setLoading(true); // Change form btn to loading component 

            // Creating a new collection to set checkout with all user data
            const dataBase = getFirestore();
            const orderCollection = collection(dataBase, "orders"); // Orders will be the new collection
            
            addDoc(orderCollection, checkout)
            .then(resp => setOrder({id: resp.id, checkout})) // Saving userId and data
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    }


    return(
        <>
            {order === undefined ? // If the order was not generated
                  <Form eventSubmit={handleTest} loading={loading} verifyData={verify} />
                :
                <CheckoutId data={order.checkout} id={order.id} />
            } 
        </>
    )
}
