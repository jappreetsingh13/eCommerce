import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Category from './Components/Category.jsx'
import AllProducts from './Components/AllProducts.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ProductName from './Components/ProductName.jsx'
import Cart from './Components/Cart.jsx'


// Setting Up Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>

      {/* ALL PRODCUTS PAGE */}
      <Route
        path=''
        element={<AllProducts />}
      />


      {/* SINGLE PRODUCT PAGE */}
      <Route
        path=':category/products/:productName'
        element={<ProductName />}
      />


      {/* CATEGORIES PRODUCTS */}
      <Route
        path=':category'
        element={<Category />}
      />

      {/* Cart Page */}
      <Route
        path='cart'
        element={<Cart />}
      />

      {/* ERROR PAGE */}
      <Route
        path='*'
        element={<ErrorPage />}
      />
    </Route>
  )
)


// Passing Routing into main file
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)