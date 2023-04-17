import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css" 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContent/ItemDetailContent';
import Cart from "./components/Cart/Cart"

function App(){

	return (
		<div className='div-Root'>
      <BrowserRouter>
        <Navbar />
        <Routes><Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'} />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/> }></Route>
          <Route path='/item/Cart' element={<Cart/>} ></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
          <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
        </Routes>
      </BrowserRouter>
		</div>
	);
}

export default App;
