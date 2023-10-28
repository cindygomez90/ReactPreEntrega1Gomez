import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Productos'}/>}/>
          <Route path='/categoría/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
