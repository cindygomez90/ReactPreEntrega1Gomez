import {useState, useEffect} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"
import {getProductById} from "../../services/firebase/firestore/products"

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState (null)
    const [loading, setLoading] = useState(true)        

    const {itemId} = useParams ()

    useEffect (() => {
        setLoading(true)

        getProductById (itemId)
        .then (response => {
            setProduct (response)
        })
        .catch (error => {
            console.error (error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [itemId])

    if(loading) {
        return <h3>Cargando detalle...</h3>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return (
        <div className="ItemDetailContainer">
            <h2>Detalle del producto</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailConteiner