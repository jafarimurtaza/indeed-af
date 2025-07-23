import React from 'react'
import { companyData } from '@/lib/companyData'
import Image from 'next/image'
import Link from 'next/link'
// import Link from 'next/link'


export default function CardComponent() {
    return (
        <div>
            <div className='space-y-5'>
                <p className='text-black text-[20px] font-bold '>Popular companies</p>
                <ul className='grid grid-cols-1 md:grid-cols-3 gap-4  '>
                    {companyData.map((company, i) => {
                        return (
                            <li
                                href='#'
                                key={i}
                                className='flex flex-col  bg-white space-y-2  border-gray-200 border-b-2 md:border-none'>
                                {/* Logo-Company-name */}
                                <div className='flex items-center gap-5'>
                                    {company.logo && (
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={48}
                                            height={48}
                                            className='rounded shadow-2xl'
                                        />
                                    )}
                                    {/* Company-name */}
                                    <div>
                                        <h2 className='text-lg text-black font-bold'>{company.name}</h2>
                                        <Link href='#' className='text-[#003a9b] hover:underline hover:decoration-[#003a9b] '>{company.reviews.toLocaleString()} reviews</Link>
                                    </div>

                                </div>
                                <div className='flex flex-wrap  items-center space-x-10 text-[#595959]  text-[14px] md:text-[15px]'>
                                    <Link href= '#' className='hover:underline hover:decoration-[#003a9b]'>{company.salaries}</Link>
                                    <Link href= '#'>{company.questions}</Link>
                                    <Link href= '#'>{company.openjobs}</Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
