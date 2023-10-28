import {getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from "react-router-dom"
import {useAsync} from "../../hooks/useAsync"

const ItemListContainer = ({greeting}) => {
    
    const {categoryId} = useParams ()


    const asyncFunction = () => categoryId ? getProductsByCategory(categoryId) : getProducts()

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(loading) {
        return <h2>Cargando...</h2>
    }

    if(error) {
        return <h1>Hubo un error al cargar los productos</h1>
    }

    if(products.length === 0) {
        return <h1>No existen productos para esta categoria</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer