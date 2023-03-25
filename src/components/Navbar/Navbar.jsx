 import carrito from "../../imagenes/carritoCompras.png"
 const Navbar = () => {

    return (
        <header>
            <h1>SuperDescuento</h1>
            <div className='container-icon'>
                <img src={carrito} alt="" width={'40px'} height={'40px'} />
            </div>
            <hr />
        </header>
    );
};
export default Navbar