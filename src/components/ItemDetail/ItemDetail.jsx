import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import {CartContext} from "../../context/CartContext"
import { useContext } from "react"

const ItemDetail = ({id, nombre, precio, categoría, imagen, stock, descripción}) => {
    const [quantityAdded, setQuantityAdded] = useState (0)

    const {addItem} = useContext (CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
    
        const item = {
        id, nombre, precio
    }

    addItem (item, quantity)
    }

    return (
        <article className="TarjetaProductoDetalle">
            <header className="TítuloProducto">
                <h2>{nombre}</h2>
            </header>

            <picture>
                <img src={imagen} alt={nombre} className="ImagenProducto"/>
            </picture>

            <section>
                <p className="InfoProducto">Categoría: {categoría}</p>
                <p className="InfoProducto">Descripción: {descripción}</p>
                <p className="InfoProducto">Precio:${precio}</p>
            </section>

            <footer className="DescripciónProducto">
                {
                    quantityAdded > 0 ? (
                    <Link to= "/cart" className="Link">Finalizar compra</Link>
                    ) :(
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail