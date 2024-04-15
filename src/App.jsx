import './App.css'
import { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer'
import Header from './Layout/Header'
import { CartProvider } from './Context/CartContext'

function App() {
  const [CartContainer, setCartContainer] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

  const addProduct = (productDetails) => {
    setCartContainer((prevItems) => [{ ...productDetails }, ...prevItems])
  }
  const removeProduct = (id) => {
    setCartContainer((prevItems) => prevItems.filter(item => item.id !== id))
  }
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(CartContainer))
  }, [CartContainer])



  return (
    <CartProvider value={{ CartContainer, addProduct, removeProduct }}>
      <Header />
      <Outlet />
      <Footer />
    </CartProvider>
  )
}

export default App
