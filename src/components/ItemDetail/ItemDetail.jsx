const ItemDetail = ({nombre, img, precio}) => {
    return (
        <div>
            
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <h3>precio: {precio}</h3>
            <p>descripcion: </p>
        </div>
    )
}

export default ItemDetail