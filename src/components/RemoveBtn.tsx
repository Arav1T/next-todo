"use client"
import React from 'react'
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function RemoveBtn({id}:{id:string

}) {
    const router= useRouter()
    const handleOnDelete= async()=>{
        const res= await fetch(`http://localhost:3000/api/todo?id=${id}`,{
            method:"DELETE",
        })
        if(res.ok){
            router.refresh()
        }
    }
  return (
    <button onClick={handleOnDelete}>
        <X/>
    </button>
  )
}
