import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';
const ItemDetail = ({nombre, img, precio, descripcion, precioAnterior}) => {
console.log(nombre)

    return (
        <div className="itemdetail-container"> 
            <div className="itemdetail-h2"><h2>{nombre}</h2></div>
            <div className="div-img-container"><img src={img} alt={nombre} />
            <p> {descripcion} </p></div>
            <h3>Precio: ${precio}</h3>    
            <button className="Button">Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail