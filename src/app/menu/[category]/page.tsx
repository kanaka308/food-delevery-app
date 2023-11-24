import { pizzas } from '@/data'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
       {pizzas.map(item=>(
        <Link className='w-full h-[60vh] border-b-2 border-r-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>

          
            {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className='objec-contain'/>
            </div>
            )}
          
          <div className="flex items-center justify-between font-bold">
            <h1 className='text-xl uppercase p-2'>{item.title}</h1>
            <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
            <button className='hidden uppercase bg-red-500 text-white p-2 rounded-md group-hover:block'>Add to Cart</button>
          </div>
           
        </Link>
       ))}
    </div>
  )
}

export default CategoryPage