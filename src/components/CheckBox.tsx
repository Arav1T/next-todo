"use client"
import { ITodo } from '@/models/todo'
import { useRouter } from 'next/navigation'
// import { Router, useRouter } from 'next/router'
import React from 'react'

export default function CheckBox({data}:{data:ITodo}) {
    const [isChecked, setIsChecked] = React.useState(Boolean)
    const router= useRouter()
    const handleCheck=async(e)=>{
      
      setIsChecked(!isChecked)
      if(!isChecked){
            console.log("checked",e.target.checked,data)
            const res = await fetch('http://localhost:3000/api/checked-todo',{
            method:"POST",
            headers: {
        "Content-type": "application/json",
      },
              body:JSON.stringify({description:data.description})
          })
          await fetch(`http://localhost:3000/api/todo?id=${data._id}`,{
            method:"DELETE",
        })
        if(res.ok){

            router.refresh()
        }
          }
          
    }
  return (
    <div>
        <input type="checkbox" name="check" id="check" checked={isChecked} onChange={handleCheck}/>
    </div>
  )
}

// "use client";
// import { ITodo } from "@/models/todo";
// import { useRouter } from "next/navigation";
// import React from "react";

// export default function CheckBox({ data }: { data: ITodo }) {
//   const [isChecked, setIsChecked] = React.useState<boolean>(false); // ✅ Fix: useState<boolean>(false)
//   const router = useRouter();

//   const handleCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const checked = e.target.checked;
//     setIsChecked(checked);

//     if (checked) {
//       // ✅ POST to checked-todo
//       const res = await fetch("http://localhost:3000/api/checked-todo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ description: data.description }),
//       });

//       // ✅ DELETE from original todo list
//       await fetch(`http://localhost:3000/api/todo?id=${data._id}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         router.refresh();
//       }
//     }
//   };

//   return (
//     <div className="flex items-center gap-3 p-3 rounded-md bg-white shadow-sm transition hover:shadow-md max-w-md mx-auto w-full">
//       <input
//         type="checkbox"
//         name="check"
//         id={`check-${data._id}`}
//         checked={isChecked}
//         onChange={handleCheck}
//         className="w-5 h-5 accent-green-600 cursor-pointer"
//       />
//       <label htmlFor={`check-${data._id}`} className="text-gray-800 text-sm sm:text-base cursor-pointer">
//         {data.description}
//       </label>
//     </div>
//   );
// }
