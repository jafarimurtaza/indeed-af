import React from 'react'
import { FaSearch } from 'react-icons/fa';


const BASE_BTN = "relative w-full flex items-center justify-center gap-5 py-2 text-black border border-[#d4d2d0] rounded-lg font-bold  text-[12px] md:text-base transition-all duration-200 ease-in-out cursor-pointer"

export default function MainCompany() {
  return (
    <div className='min-h-screen flex  items-center justify-center'>
      <div className='w-full bg-amber-200 p-8'>
      <div className='space-y-3'>
          <h1 className='text-black font-bold text-[1.75rem]'>Find great places to work</h1>
        <p className='text-[#F3F2F1] text-[12px]'>Get access to millions of company reviews</p>
        <div className='space-y-5'>
            <p>Company name or job title</p>
            <div className='w-full flex flex-col md:flex md:flex-row gap-3 '>
                <div className={BASE_BTN}> <FaSearch className="absolute right-4 w-6 h-6 " /></div>
                <div className='w-full md:w-1/3 bg-[#3F73D3] p-5 text-center font-bold text-white rounded-lg'>Find companies</div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
