import React, { createContext, useContext } from "react";

export const CartContext = createContext({
    CartContainer: [{
        id: 1,
        title: "Product 1",
        price: 100,
        quantity : 1,
        img : "",
        total : 100
    }],
    addProduct: (productDetails) => { },
    removeProduct: (id) => { }
})

export function useCart() {
    return useContext(CartContext)
}
const CartProvider = CartContext.Provider
export {CartProvider}