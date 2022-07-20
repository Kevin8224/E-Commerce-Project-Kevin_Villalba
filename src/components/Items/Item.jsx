import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where, orderBy } from 'firebase/firestore'; // Firebase
import Loading from '../LoadingScreen/Loading.jsx';

import './Item.css'; //Custom css


export default function Item() {
    const [products, setProducts] = useState([]); // To set as props 
    const [loading, setLoading] = useState(true); // Loading component

    // Using params from NavBar links
    const { categoriaId } = useParams();

    // Fetching products from firebase
    useEffect(() => {
        const dataBase = getFirestore();
        const queryCollection = collection(dataBase, "products"); 
        const orderedCollection = query(queryCollection, where("indexHelper", ">", 0), orderBy("indexHelper", "asc")); // Sorting the products for a better ui
        const queryCollectionFilter = categoriaId ? query(queryCollection, where('category', '==', `${categoriaId}`)) : orderedCollection; //Filtering products by category or returning all products
        
        getDocs(queryCollectionFilter)
        .then(resp => 
            setProducts(
                resp.docs.map(item => ({id: item.id, ...item.data()}))
            )
        )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [categoriaId]);
    

    return(
        <>
            {
            loading ? <Loading />
            :  
            products.map(food => 
               <div className='foodCard' key={food.id}>
                    <div className='foodImage'>
                        <img src={food.image} alt="Cargando imagen..."/>
                    </div>
                    <div className='info'>
                        <h5 className='foodName'>{food.name}</h5>

                            <Link className='Link' to={`/detalle/${food.id}`}>
                                <button className="showDescription">Mostrar descripción</button>
                            </Link>

                    </div>
               </div>
            )
        }
        </>
    )
}