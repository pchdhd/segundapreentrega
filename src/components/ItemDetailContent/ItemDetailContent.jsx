import { getProductsById } from "../../data"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { data } from '../../data';
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {itemId} = useParams()
    useEffect(() => {
        getProductsById(itemId)
            .then(product => { setProduct(product) })
           
            .catch(error => {
                console.log(error)
            })
    }, [itemId])
    return (
        
    <div><h1>Detalle de Producto</h1>
        <ItemDetail {...product} />
    </div>)}

export default ItemDetailContainer
