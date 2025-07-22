import React from 'react'
import { companyData } from '@/lib/companyData'
import Image from 'next/image'
import Link from 'next/link'
// import Link from 'next/link'


export default function CardComponent() {
    return (
        <div>
            <div>
                <p>Popular companies</p>
                <ul className='bg-amber-100 grid grid-cols-1 '>
                    {companyData.map((company, i) => {
                        return (
                            <li
                                href="#"
                                key={i}
                                className='flex flex-col  bg-white'>
                                {/* Logo-Company-name */}
                                <div className='flex items-center gap-5  bg-amber-200'>
                                    {company.logo && (
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={48}
                                            height={48}
                                            className='rounded'
                                        />
                                    )}
                                    {/* Company-name */}
                                    <div>
                                        <h2 className='text-lg text-black font-bold'>{company.name}</h2>
                                        <span>{company.reviews.toLocaleString()} reviews</span>
                                    </div>

                                </div>
                                <div className="flex flex-wrap  items-center space-x-10">

                                    <span>{company.salaries}</span>  <span>{company.questions}</span>  <span>{company.openjobs}</span>
                                </div>

                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
