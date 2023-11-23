import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-4 xl:p-6 text-red-500 flex items-center justify-between'><Link className='font-bold text-xl' href="/">MASSIMO</Link>
    <p>@ ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer