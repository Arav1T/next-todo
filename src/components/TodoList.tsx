'use client';

import { ITodo } from '@/models/todo';
import { useTodos } from '../context/TodoContext';

export default function TodoList() {
  const { todos, deleteTodo } = useTodos();

  return (
    <ul>
      {todos?.map((todo:ITodo) => (
        <li key={todo._id} className="flex justify-between bg-white text-green-800 p-2 my-1 shadow">
          {todo.description}
          <button onClick={() => deleteTodo(todo.id)} className="text-red-500">X</button>
        </li>
      ))}
    </ul>
  );
}


// const handleSubmit =async (e:React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!input.trim()) return;
//     try {
//         const res = await fetch('/api/todo',{
//             method:"POST",
//             headers: {
//                 'Content-Type': 'application/json',
//               },
//               body: JSON.stringify({ description: input }),
//         })
//         const data=await res.json()
//         console.log("data",data)
//     } catch (error) {
//         console.log("error",error)
//     }
//     // addTodo(input);
//     setInput('');
//   };
