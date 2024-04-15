import React from 'react';
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  return (
    <footer className='w-full mt-40 bg-gray-100 py-8'>
      <div className='mx-auto px-2'>
        {/* TABLE LINKS AND UPDATES & FEEDBACKS*/}
        <div className='grid grid-cols-1  md:grid-cols-2 gap-8'>
          {/* FEEDBACKS */}
          <div className='p-6 flex flex-col gap-y-2'>
            <p className='text-sm font-semibold'>STAY IN TOUCH</p>
            <p className='text-sm text-gray-400'>SIGN UP BELOW FOR EXCLUSIVE UPDATES, OFFERS, AND FUTURE MRBEAST PRODUCTS</p>
            <div className='w-[80%] border border-slate-700 rounded-md flex mt-8'>
              <input
                type='email'
                className='flex-1 p-2 outline-none rounded-l-md bg-white'
                placeholder='Email'
              />
              <button type='submit' className='bg-[#E74683] text-white p-2 rounded-r-md'><FaArrowRight /></button>
            </div>
          </div>
          {/* TABLE LINKS */}
          <div>
            <table className='w-full'>
              <thead className='border border-slate-600 '>
                <tr>
                  <th className='p-2 font-semibold border border-slate-600 '>QUICK LINKS</th>
                  <th className='p-2 font-semibold border border-slate-600'>CLIENT SERVICES</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border border-slate-600'>
                  <td className='p-2  border border-slate-600 capitalize'>FAQ's</td>
                  <td className='p-2  border border-slate-600 capitalize'>Shipping and Returns</td>
                </tr>
                <tr>
                  <td className='p-2  border border-slate-600 capitalize'>Search</td>
                  <td className='p-2  border border-slate-600 capitalize'>Start a return</td>
                </tr>
                <tr>
                  <td className='p-2  border border-slate-600 capitalize'>Contact us</td>
                  <td className='p-2  border border-slate-600 capitalize'>Terms and conditions</td>
                </tr>
                <tr>
                  <td className='p-2  border border-slate-600 capitalize'>Account Login</td>
                  <td className='p-2  border border-slate-600 capitalize'>Accessibility statement</td>
                </tr>
                <tr>
                  <td className='p-2 border border-slate-600  capitalize'>Size and details </td>
                  <td className='p-2 border border-slate-600 capitalize'>Reseller policy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* RATINGS ACROSS WEB */}
      <div></div>

      {/* SOCIAL MEDIA HANDLES */}
      <div></div>

      {/* PAYMENT SECTION */}
      <div></div>
    </footer>
  )
}

export default Footer;
