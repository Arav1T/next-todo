import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center mx-4'>
        <div>Nextjs-Todo</div>
        <div><Link href={'/todo-form'}>Add</Link></div>
    </div>
  )
}
