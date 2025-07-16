import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa';


export default function EmailInput() {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        setError("")
    }
    const handleValidateEmail = () => {
        if (email.length < 12) {
            setError("Error: Invalid email address")
        } else {
            setError("")
        }
    }
    return (
        <div>
            <div className='space-y-2'>
                <label className={`pl-1 text-black font-bold text-[12px] lg:text-base  leading-6
                    ${error ? "text-[#A9252B]":""}`}>Email address <span className='text-[#A9252B]'>*</span></label>
                <input
                    type='email'
                    name='gmail'
                    value={email}
                    onChange={handleEmailChange}
                    placeholder='Email address'
                    className={`w-full text-gray-700 flex items-center justify-center gap-5 py-2 pl-2 border border-[#d4d2d0] rounded-lg outline hover:border-b-4 hover:border-[#3F73D3] transition-all duration-200 
                             ${error ? "border-[#A9252B]" : ""}`}
                />
                {error && <p className='text-[#A9252B]'>{error}</p>}
                {/* continue-button */}
                <button
                    onClick={handleValidateEmail}
                    className={`w-full flex items-center justify-center gap-2 py-2 border border-[#d4d2d0] rounded-lg
                  ${email ? "bg-[#2557A7]" : "backdrop-blur-sm bg-[#2557A7]/60"}`}>
                    <p className='text-white font-bold text-[12px] lg:text-base'>Continue</p>
                    <FaArrowRight size={15} color="white" />
                </button>
            </div>
        </div>
    )
}
