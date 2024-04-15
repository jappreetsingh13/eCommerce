import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

function AllProducts() {
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData((data))
        setLoader(false)
      })
      .catch((error) => {
        console.log("Error Fetching all products " + error)
        setLoader(false)
      })
  }, [])


  return (
    <>
      {/* Loader */}
      {loader && (
        <>
          <div className='capitalize flex flex-col gap-y-8 justify-center items-center'>
            <div className="loader"></div>
            loading data please wait...
          </div>
        </>
      )}
      {/* Content */}
      {!loader && (
        <>
          <h1 className='my-8 text-center font-semibold text-3xl'>All Products </h1>
          <div className='flex flex-wrap justify-around gap-x-4 text-center gap-y-8'>
            {data.map((products) => {
              return (<Link to={`${products.category}/products/${products.id}`} key={products.id}
                className='border border-slate-400 w-[30%] rounded-md p-4 flex flex-col gap-3'
              >
                <h2 className='text-lg font-semibold'> {products.title} </h2>
                <div className='flex justify-center items-center h-60'>
                  <img
                    width='150px'
                    src={products.image}
                    alt='Product Image'
                  />
                </div>
                <p className='flex justify-center items-center mt-4 font-medium'> MRP - <LiaRupeeSignSolid />{products.price}</p>
                <div className='flex flex-wrap'>
                  <p className='flex flex-row justify-start items-center mt-8 p-0 text-sm overflow-auto truncate '
                  >{products.description}</p> <span><Link className='text-blue-800 cursor-pointer' to={`${products.category}/products/${products.id}`}> see more...</Link></span>
                </div>
                <p className='flex flex-row justify-start items-center'>
                  Rating : {products.rating.rate} <FaStar className='text-yellow-500' /></p>
              </Link>)
            })}
          </div>
        </>
      )
      }
    </>
  )
}

export default AllProducts

