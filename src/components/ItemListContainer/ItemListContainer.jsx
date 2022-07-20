import Item from '../Items/Item';
import './ItemListContainer.css';

// Item list to show all products at start
function ItemListContainer(){
    return(
        <div className='contentContainer'>        
        <Item />
        </div>
    )
}

export default ItemListContainer;