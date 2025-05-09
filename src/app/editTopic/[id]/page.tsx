// /app/editTopic/[id]/page.tsx

import TodoForm from "@/components/TodoForm";

interface EditPageProps {
    params: {
      id: string;
    };
  }
  
  export default async function EditTopicPage({ params }: EditPageProps) {
    const  id =await params.id;
  
    const res = await fetch(`http://localhost:3000/api/todo/${id}`);
    const  {data } = await res.json();
    console.log("checking",data)
  
    if (!data) {
      return <div>Todo not found</div>;
    }
  
    // const { description } = data;
  
    return (
      <div>
        <h1>Edit Topic</h1>
        <TodoForm data={data} />
      </div>
    );
  }
  