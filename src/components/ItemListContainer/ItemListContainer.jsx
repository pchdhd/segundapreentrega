import { ProductList } from "../ProductList";
const ItemListContainer = ({greeting}) => {

    return (
        <div> 
        <span>{greeting}</span>
        <ProductList/>
        </div>

    )
}

export default ItemListContainer;