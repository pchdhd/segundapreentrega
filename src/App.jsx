import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { ProductList } from './components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css" 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContent/ItemDetailContent';

function App(){

	return (
		<>
      <BrowserRouter>
        <Navbar />
        <Routes><Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'} />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer/> }></Route>
        </Routes>
      </BrowserRouter>
		</>
	);
}

export default App;
