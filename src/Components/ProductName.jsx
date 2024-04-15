import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useCart } from '../Context/CartContext';

const ProductName = () => {
    const { productName } = useParams();
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState({});
    const [count, setCount] = useState(1);
    const { addProduct } = useCart();

    const fetchData = async (product) => {
        try {
            const fetchApi = await fetch(`https://fakestoreapi.com/products/${product}`);
            const response = await fetchApi.json();
            setData(response);
            setLoader(false);
        } catch (error) {
            console.log("There was an error fetching API" + error);
        }
    };

    useEffect(() => {
        fetchData(productName);
    }, [productName]);

    const addCount = () => {
        setCount(prevCount => prevCount + 1);
        if (data.rating && count >= data.rating.count) setCount(data.rating.count);
    };

    const subCount = () => {
        setCount(prevCount => prevCount - 1);
        if (count <= 1) setCount(1);
    };

    const addToCart = (e) => {
        e.preventDefault();
        if (count <= 0 || count >= (data.rating && data.rating.count)) return;
        addProduct({
            id: data.id,
            title: data.title,
            price: data.price,
            image : data.image,
            quantity: count,
            total : ((data.price)*(count))  
        });
        console.log(data.id, data.title, count, data.price);
    };

    return (
        <>
            {loader ? (
                <div className='capitalize flex flex-col gap-y-4 justify-center items-center'>
                    <div className="loader"></div>
                    Loading data please wait...
                </div>
            ) : (
                <form className='my-12 mx-8' onSubmit={addToCart}>
                    <h1 className='text-2xl font-medium'>{data.title}</h1>
                    <div className='flex w-full my-12'>
                        <div className='w-[40%] flex justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <img
                                    width='250px'
                                    src={data.image}
                                    alt='Product Image'
                                />
                            </div>
                        </div>
                        <div className='w-[60%] flex flex-col flex-wrap gap-y-3 gap-x-3'>
                            <div className='flex items-center gap-x-2'>
                                <h2 className='text-lg font-medium'>MRP :- </h2>
                                <div className='flex items-center'>
                                    <LiaRupeeSignSolid />
                                    <span>{data.price}</span>
                                </div>
                            </div>
                            <div className='flex my-2 gap-x-2'>
                                <p className='font-medium'>Product Category :-</p>
                                <p className='text-md'> {data.category}</p>
                            </div>
                            <div>
                                <p className='font-medium gap-x-2'>Product Description :-</p>
                                <p className='flex flex-wrap'>{data.description}</p>
                            </div>
                            <div className='my-2 flex gap-x-2'>
                                <p className='font-medium'>Product count :-</p>
                                <p>{data.rating && data.rating.count} left</p>
                            </div>
                            <div className='my-2 flex gap-x-2'>
                                <p className='font-medium'>User Ratings :-</p>
                                <p className='text-md flex items-center gap-x-1'>{data.rating && data.rating.rate} <FaStar className='text-yellow-500' /></p>
                            </div>
                            <div className='flex flex-row items-center gap-x-2'>
                                <button className='font-medium capitalize'>add to cart :-</button>
                                <div className='flex flex-row gap-x-3 items-center'>
                                    <div className='bg-[#E74683] text-white px-1 rounded-xl text-base' onClick={subCount}>
                                        <RiSubtractFill />
                                    </div>
                                    <p>{count}</p>
                                    <div className='bg-[#E74683] text-white px-1 rounded-xl text-base' onClick={addCount}>
                                        <IoIosAdd />
                                    </div>
                                    <input type='submit' value="Add" className='bg-[#E74683] text-white p-2 py-1 border border-slate-800 mx-2 rounded-md hover:bg-[#fe83b2d2] active:bg-[#e7468456]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default ProductName;
