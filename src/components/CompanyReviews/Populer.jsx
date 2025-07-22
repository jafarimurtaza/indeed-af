import React from 'react'
import { companyData } from '@/lib/companyData'
import Image from 'next/image'
import Link from 'next/link'


export default function Populer() {
    return (
        <div>
            <div className='flex flex-col'>
                <p>Popular companies</p>
                <ul className='bg-amber-100 grid grid-cols-3 '>
                    {companyData.map((company,i) => {
                       return(
                         <Link
                         href="#"
                         id={i}
                          className='flex items-center p-5 space-x-4'>
                            {company.logo && (
                                <Image src = {company.logo} alt = {company.name} width={32} height={32}/>
                            )}
                            <h2 className='text-black font-bold'>{company.name}</h2>
                            <p>{company.reviews}</p>
                        </Link>
                       )
                    })}
                </ul>
            </div>
        </div>
    )
}
