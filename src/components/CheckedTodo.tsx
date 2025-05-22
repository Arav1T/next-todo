"use client";
import { ITodo } from '@/models/todo';
import { FolderSync } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function CheckedTodo({ data }: { data: ITodo[] }) {
    const router=useRouter()
  const handleBack = async (d: ITodo) => {
    try {
      const res1=await fetch('http://localhost:3000/api/todo', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ description: d.description })
      });

      const res2=await fetch(`http://localhost:3000/api/checked-todo/${d._id}`, {
        method: "DELETE"
      });
      if(res1.ok && res1.ok){
        router.push('/')
      }
      console.log("Moved back:", d.description);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
      {data.map(d => (
        <div key={d._id}>
          <button onClick={() => handleBack(d)}>
            <FolderSync />
          </button>
          <div className='text-red-800'>Hello {d.description}</div>
        </div>
      ))}
    </>
  );
}

// "use client";

// import { ITodo } from "@/models/todo";
// import { FolderSync } from "lucide-react";
// import { useRouter } from "next/navigation";
// import React from "react";

// export default function CheckedTodo({ data }: { data: ITodo[] }) {
//   const router = useRouter();

//   const handleBack = async (d: ITodo) => {
//     try {
//       const res1 = await fetch("http://localhost:3000/api/todo", {
//         method: "POST",
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify({ description: d.description }),
//       });

//       const res2 = await fetch(
//         `http://localhost:3000/api/checked-todo/${d._id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (res1.ok && res2.ok) {
//         router.push('/'); // ✅ Refresh the data instead of redirecting
//       }

//       console.log("Moved back:", d.description);
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <div className="space-y-4 max-w-xl mx-auto mt-6">
//       {data.map((d) => (
//         <div
//           key={d._id?.toString()}
//           className="flex items-center justify-between bg-gray-100 rounded-md p-4 shadow-sm hover:shadow-md transition"
//         >
//           <div className="text-gray-800 font-medium">{d.description}</div>
//           <button
//             onClick={() => handleBack(d)}
//             className="text-blue-600 hover:text-blue-800 transition"
//             title="Move back to active"
//           >
//             <FolderSync size={20} />
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
