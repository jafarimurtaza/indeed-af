import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import CardComponent from './CardComponent';

export default function MainCompanyReview() {
  return (
    <div className='min-h-screen flex justify-center items-center bg-white px-5 py-10'>
      <div className=" w-full md:max-w-5xl max-auto px-4 ">
        <div className='space-y-5'>
          <h1 className='text-[#2d2d2d] font-bold text-[20px] md:text-[1.75rem]'>Find great places to work <span className='text-[#595959] text-[14px] block'> Get access to millions of company reviews</span></h1>
          <div className='space-y-5'>
            <p className='text-[#2d2d2d] text-base'>Company name or job title</p>
            {/* Search-Input */}
            <div className='w-full flex flex-col md:flex-row gap-3'>
              <div className="relative w-full  flex items-center justify-center border rounded-md hover:border-b-4 border-[#003a9b] ">
                <input
                  type='text'
                  placeholder='Search...'
                  className='left-4 w-full pl-2 py-2  text-gray-500 outline-none'
                />
                <FaSearch className="absolute right-3   text-gray-500 w-5 h-5" />
              </div>
              {/* Search-button */}
              <button className='w-full md:w-1/2 bg-[#003a9b] p-2 text-center items-center text-base font-bold text-white rounded-md '>Find companies</button>
            </div>
            <Link href="#" className='inline-block text-center text-base text-[#003a9b] border-b'>Do you want to search for salaries</Link>
          </div>
          <CardComponent />
        </div>
      </div>
    </div>
  )
}
