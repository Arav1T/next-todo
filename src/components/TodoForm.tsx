'use client';


import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function TodoForm({data}) {
  console.log("hbfh",data)
  const router= useRouter()
  const [input, setInput] = useState(data.description);
  // const { addTodo } = useTodos();

  const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    const res=await fetch(`http://localhost:3000/api/todo/${data._id}`,{
      method:"PUT",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify(input)
    })
    if(res.ok){
      // router.refresh();
      router.push("/");
    }
    // addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 flex-1"
        placeholder="Enter task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
   
  );
}
// 'use client';

// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// interface TodoFormProps {
//   data: {
//     _id: string;
//     description: string;
//   };
// }

// export default function TodoForm({ data }: TodoFormProps) {
//   const router = useRouter();
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     setInput(data.description || '');
//   }, [data.description]);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const res = await fetch(`http://localhost:3000/api/todo/${data._id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ description: input }), // ✅ FIXED
//     });

//     if (res.ok) {
//       router.push('/');
//     }
//     setInput('');
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col sm:flex-row gap-3 mt-6 max-w-xl mx-auto"
//     >
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="border border-gray-300 rounded px-4 py-2 flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Update your task..."
//         aria-label="Update todo"
//       />
//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition text-sm"
//       >
//         Update
//       </button>
//     </form>
//   );
// }
