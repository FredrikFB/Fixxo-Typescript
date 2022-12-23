import React from 'react';
import './style.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import NotFoundView from './views/NotFoundView';
import ProductProvider from './contexts/ProductContext';
import AddProductProvider from './contexts/AddProductContext';
import ShoppingCartProvider from './contexts/ShoppingCartContext';
import CreateView from './views/CreateView';



const App: React.FC =() => {


  return (
    <BrowserRouter>
      <AddProductProvider >
      <ShoppingCartProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/categories" element={<CategoriesView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/compare" element={<CompareView />} />
          <Route path="/wishlist" element={<WishListView />} />
          <Route path="/shoppingcart" element={<ShoppingCartView />} />        
          <Route path="/create" element={<CreateView />} />        
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </ProductProvider>
      </ShoppingCartProvider>
      </AddProductProvider>
    </BrowserRouter>
  );
}

export default App;
