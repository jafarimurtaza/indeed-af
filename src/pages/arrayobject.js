import React from 'react'

const data = [
  {
    category: 'Fruits',
    items: ['Apple', 'Banana', 'Orange']
  },
  {
    category: 'Vegetables',
    items: ['Carrot', 'Potato', 'Tomato']
  }
];

export default function ArrayObject() {
  return (
    <div className='bg-green-200 p-4'>
      {data.map((group) => (
        <div className='mb-4' key={group.category}>
          <h2 className='text-xl font-bold'>{group.category}</h2>
          <ul className='ml-4 list-disc'>
            {group.items.map((item, index) => (
              <li key={index} className='text-blue-700'>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
