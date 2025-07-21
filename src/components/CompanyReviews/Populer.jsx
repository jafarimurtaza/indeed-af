import React from 'react'

const companyData = [
    {
        //  icon :"",
        title: "JD Sports Fashion"
    },
    {
        //  icon :"",
        title: "JD Sports Fashion"
    },
     {
        //  icon :"",
        title: "JD Sports Fashion"
    }
]
export default function Populer() {
    return (
        <div>
            <div className='flex flex-col'>
                <p>Popular companies</p>
                <ul className='bg-amber-100 grid grid-cols-3 '>
                    {companyData.map((item) => {
                       return(
                         <li>
                            <p>{item.title}</p>
                        </li>
                       )
                    })}
                </ul>
            </div>
        </div>
    )
}
