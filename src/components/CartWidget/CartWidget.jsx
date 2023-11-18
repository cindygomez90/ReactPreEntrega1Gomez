import carrito from "./assets/carrito.png"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
    const {totalQuantity} =useContext (CartContext)

    return (
        <div>
            <Link to ='/cart' className="CartWidget" style={{display: totalQuantity > 0 ? 'block':'none'}}>
                <img src={carrito} alt="carrito-widget"/>
                {totalQuantity}
            </Link>
        </div>
        
    )
}

export default CartWidget