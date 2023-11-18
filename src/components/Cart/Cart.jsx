import "./Cart.css"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Cart = () => {
    const {cart, clearCart, totalQuantity,total} =useCart ()

    if (totalQuantity === 0) {
        return (
            <div>
                <h3>No hay productos en el carrito</h3>
                <Link to= '/' className="Option">Productos</Link>
                
            </div> 
        )
    }

    return (
        <div>
            <h1>Productos del carrito</h1>
            <div>
                {cart.map(prod => {
                        return (
                            <div key={prod.id} {...prod} className="prodcarrito">
                                <h3>Producto: {prod.nombre}</h3>
                                <h3>Cantidad: {prod.quantity}</h3>
                                <h3>Precio unitario: {prod.precio}</h3>
                                <h3>Subtotal: {prod.precio * prod.quantity}</h3>                                
                            </div>

                        )
                    })
                }
            </div>
            <div className="fincarrito">
                <h1>Total: ${total}</h1>
                <button onClick={() =>clearCart ()} className ="Boton">Limpiar carrito</button>
                <Link to='/checkout'>Checkout</Link>
            </div>
            
        </div>

    )
}

export default Cart

