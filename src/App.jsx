import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from './context/CartContext'


function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Productos'}/>}/>
          <Route path='/categoría/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<h1>PAGINA NO ENCONTRADA</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
          
  )
}

export default App
