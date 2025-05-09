'use client';

import { useRouter } from 'next/navigation';
// import { useTodos } from '@/context/TodoContext';
import { useState } from 'react';


export default function TodoForm() {
    const router= useRouter()
  const [input, setInput] = useState('');
//   const { addTodo } = useTodos();

  const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    // addTodo(input);
    const data= fetch('/api/todo',{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ description:input }),
    })
    setInput('');
    router.push('/')
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
        Add
      </button>
    </form>
  );
}
