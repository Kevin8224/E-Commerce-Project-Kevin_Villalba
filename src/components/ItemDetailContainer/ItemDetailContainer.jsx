import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../LoadingScreen/Loading.jsx';
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { doc, getDoc, getFirestore } from 'firebase/firestore';


export default function ItemDetailContainer(){
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true); // Loading conditional

    // Using params from Item 
    const { id } = useParams();

    useEffect(() => {
        const dataBase = getFirestore();
        const queryItem = doc(dataBase, "products", id); // Finding one product by params(id) 

        getDoc(queryItem)
            .then(res => setProduct({ id: res.id, ...res.data() })) // Set one product
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    return(
        <>
        {
         loading ? <Loading />
         : 
         <ItemDetail prod={ product } />
        }
        </>
    )
}