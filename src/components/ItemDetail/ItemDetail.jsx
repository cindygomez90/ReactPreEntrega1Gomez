import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, precio, categoría, imagen, stock, descripción}) => {
    return (
        <article className="TarjetaProductoDetalle">
            <header className="TítuloProducto">
                <h2>{nombre}</h2>
            </header>

            <picture>
                <img src={imagen} alt={nombre} className="ImagenProducto" />
            </picture>

            <section>
                <p className="InfoProducto">Categoría: {categoría}</p>
                <p className="InfoProducto">Descripción: {descripción}</p>
                <p className="InfoProducto">Precio:${precio}</p>
            </section>

            <footer className="DescripciónProducto">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log ("Cantidad agregada")}/>
            </footer>
        </article>
    )
}

export default ItemDetail