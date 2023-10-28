import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({id, nombre, precio, categoría, imagen, stock}) => {

    return (
    <article className="TarjetaProducto">
        <header className="TítuloProducto">
            <h2>{nombre}</h2>
        </header>

        <picture>
            <img src={imagen} alt={nombre} className="ImagenProducto" />
        </picture>

        <section>
            <p>Precio:${precio}</p>
            <p>Stock Disponible: {stock}</p>
        </section>

        <footer className="DescripciónProducto">
            <Link to={`/item/${id}`}className= "Option">Ver detalle</Link>
        </footer>
    </article>
    )
}

export default Item