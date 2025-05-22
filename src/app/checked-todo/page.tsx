import CheckedTodo from '@/components/CheckedTodo'
import { FolderSync } from 'lucide-react'
import React from 'react'

export default async function page() {
        const res =  await fetch('http://localhost:3000/api/checked-todo')
        const data = await res.json()
        console.log("data",data)
        
  return (
    <div>
        <CheckedTodo data={data}/>
         </div>
  )
}
