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
// "use client";

// import React from "react";
// import { X } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function RemoveBtn({ id }: { id: string }) {
//   const router = useRouter();
//   const [loading, setLoading] = React.useState(false);

//   const handleOnDelete = async () => {
//     if (!confirm("Are you sure you want to delete this item?")) return;

//     try {
//       setLoading(true);
//       const res = await fetch(`http://localhost:3000/api/todo?id=${id}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         router.refresh();
//       } else {
//         console.error("Failed to delete todo.");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleOnDelete}
//       disabled={loading}
//       className="p-2 rounded-full hover:bg-red-100 text-red-600 transition disabled:opacity-50"
//       title="Delete"
//       aria-label="Delete todo"
//     >
//       <X size={18} />
//     </button>
//   );
// }
