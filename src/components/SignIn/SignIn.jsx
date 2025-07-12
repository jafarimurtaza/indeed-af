import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

export default function SignIn() {
  return (
    <div>
     <div className='min-h-screen flex items-center justify-center '>
      <div className='p-5 border-1 border-gray-300 rounded-2xl'>
       <div className='space-y-5'>
         <h1 className='text-black font-bold text-xl'>Ready to take the next step?</h1>
      <h3>Create an account or sign in.</h3>
      <p>By creating an account or signing in, you understand and agree to Indeed's Terms. You also acknowledge our Cookie and Privacy policies.
      </p>
       </div>
     <div className='space-y-4 '>
       <button className='w-full flex items-center justify-center gap-5 py-4 border-[1] rounded-2xl font-bold text-xl'>
          <FcGoogle className="w-6 h-6" /> 
          Continue with Google</button>
       <button className='w-full flex items-center justify-center gap-5 p-5 border-[1] rounded-2xl font-bold text-xl'>
        <FaApple className='w-6 h-6'/>Continue with Apple</button>
     </div>
      </div>
     </div>
    </div>
  )
}
