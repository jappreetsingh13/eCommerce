import React from 'react';
import { useCart } from '../Context/CartContext';

const Cart = () => {
    const { CartContainer, removeProduct } = useCart();

    const add2Num = (first, second) => {
        console.log(first + second)
        return (first + second)
    }
    const total = CartContainer.map((item) => item.total);
    console.log(total)
    const cartTotal = total.reduce(add2Num, 0).toFixed(2);
    console.log(cartTotal);
    return (
        <>
            <div className='my-12 mx-8'>
                <h1 className="text-2xl font-medium text-center capitalize m-12">Your Cart</h1>
                {CartContainer && CartContainer.length == 0 ? (
                    <p className='text-center my-10 font-bold text-4xl capitalize'>Your cart is empty.</p>
                ) : (
                    <div className=" flex flex-col gap-y-4">
                        {CartContainer.map(item => (
                            <div key={item.id} className="border p-4 flex flex-row flex-wrap justify-between items-center">
                                <img
                                    src={item.image}
                                    width='70px'
                                />
                                <h2 className="text-lg font-semibold w-[30%]">{item.title}</h2>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Total : {item.price * item.quantity}</p>
                                <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => removeProduct(item.id)}>Remove</button>
                            </div>
                        ))}
                        {/* add total  */}
                        <div className="border p-4 flex flex-row justify-between items-center">
                            <h2 className="text-lg font-semibold w-[30%]">Total</h2>
                            <p>{cartTotal}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
