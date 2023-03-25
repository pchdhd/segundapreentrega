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
            .then(res => { setProduct(res) })
           
           
            .catch(error => {
                console.log(error)
            })
    }, [itemId])
    return (
    
    <div>
        <ItemDetail {...data} />
    </div>)}

export default ItemDetailContainer