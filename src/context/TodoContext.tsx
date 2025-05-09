'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { ITodo } from '@/models/todo';

interface TodoContextType {
  todos: ITodo[];
  addTodo: (description: string) => Promise<void>;
  refreshTodos: () => Promise<void>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const fetchTodos = async () => {
    const res = await fetch('/api/todo');
    const data = await res.json();
    setTodos(data);
    console.log(data)
  };

  const addTodo = async (description: string) => {
    const res = await fetch('/api/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    });
    const newTodo = await res.json();
    setTodos((prev) => [...prev, newTodo]);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo, refreshTodos: fetchTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos must be used within a TodoProvider');
  return context;
};
