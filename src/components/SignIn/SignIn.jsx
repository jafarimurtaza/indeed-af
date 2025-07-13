import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function SignIn() {
  return (
    <div>
     <div className='min-h-screen bg-gray-200 flex items-center justify-center'>
      <div className='p-8 border-1 bg-white border-gray-300 rounded-2xl max-w-2xl w-full'>
       <div className='space-y-5'>
         <h1 className='text-black font-bold text-xl'>Ready to take the next step?</h1>
      <h3>Create an account or sign in.</h3>
      <p>By creating an account or signing in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies.
      </p>
       </div>
     <div className='space-y-4 '>
       <button className='w-full flex items-center justify-center gap-5 py-4 border-[1] rounded-2xl font-bold text-xl hover:border-blue-200 hover:bg-blue-300'>
          <FcGoogle className="w-6 h-6" /> 
          Continue with Google</button>
       <button className='w-full flex items-center justify-center gap-5 p-5 border-[1] rounded-2xl font-bold text-xl'>
        <FaApple className='w-6 h-6'/>Continue with Apple</button>
     </div>
     <div className='flex items-center my-4'>
      <div className='flex-grow h-px bg-gray-300 '></div>
      <span className='px-4 text-black font-medium'>or</span>
      <div className='flex-grow h-px bg-gray-300 '></div>
     </div>
     {/* email-input */}
   <div className='space-y-2'>
      <label className='text-black font-medium text-xl'>Email address <span className='text-red-500'>*</span></label>
     <input
     type='email'
     name='gmail'
     className='w-full p-5 border-2 rounded-2xl'

     />
   </div>
      </div>
     </div>
    </div>
  )
}
