import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

  const BASE_BTN = "relative w-full flex items-center justify-center gap-5 py-2 text-black border border-[#d4d2d0] rounded-lg font-bold  text-[12px] md:text-base transition-all duration-200 ease-in-out cursor-pointer"
  const ICON_STYLE = "absolute left-4 w-6 h-6"

export default function SignIn() {

  return (
    <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
      <div>
        {/* <img
            className="w-auto h-16"
            src="/images/indeed.png"
            alt="indded logo"
          /> */}
        <div className='max-w-md p-5 border-1 bg-white border-gray-300 rounded-2xl w-full'>
          <div className='space-y-5 mb-3'>
            <h1 className='text-black font-bold text-xl'>Ready to take the next step?</h1>
            <h3 className='text-[#595959]'>Create an account or sign in.</h3>
            <p className='text-[#595959] text-[11px] md:text-xs'>
              By creating an account or signing in, you understand and agree to Indeed's <Link href="#" className='text-[#2557A7] underline'>Terms</Link>. You also acknowledge our <Link href="#" className='text-[#2557A7] underline'>Cookie</Link> and <Link href="#" className='text-[#2557A7] underline'> Privacy</Link> policies.
            </p>
          </div>
          {/* google and apple */}
          <div className='space-y-4 '>
            <button className={`${BASE_BTN} hover:border-[#3F73D3] hover:bg-[#eef1fe] `}>
              <FcGoogle className={ICON_STYLE} />
              Continue with Google</button>
            <button className={`${BASE_BTN} hover:border-[#3F73D3] hover:bg-[#eef1fe] `}>
              <FaApple className={ICON_STYLE} />Continue with Apple</button>
          </div>
          {/* or-section */}
          <div className='flex items-center my-4'>
            <div className='flex-grow h-px bg-gray-300 '></div>
            <span className='px-2 text-black font-medium'>or</span>
            <div className='flex-grow h-px bg-gray-300 '></div>
          </div>
          {/* email-input */}
          <div className='space-y-2'>
            <label className='pl-1 text-black font-bold text-[12px] lg:text-base  leading-6'>Email address <span className='text-red-500'>*</span></label>
            <input
              type='email'
              name='gmail'
              placeholder='Email Address'
              className='w-full text-gray-700 flex items-center justify-center gap-5 py-2 pl-2 border border-[#d4d2d0] rounded-lg outline hover:border-b-4 hover:border-[#3F73D3] transition-all duration-200 '
            />
            <div className='w-full flex items-center justify-center gap-2 py-2  border border-[#d4d2d0] rounded-lg '>
              <p className='text-black font-bold text-[12px] lg:text-base'>Continue</p>
               <FaArrowRight size={15} color="blue" /> 
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}
