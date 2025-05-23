import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { SquarePen } from "lucide-react";
import CheckBox from "./CheckBox";
// import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todo", {
      cache: "no-store",
      // next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    const data= await res.json()
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const  topics  = await getTopics();

  return (
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <CheckBox data={t}/>
            {/* <h2 className="font-bold text-2xl">{t.title}</h2> */}
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              {/* <HiPencilAlt size={24} /> */}
              <SquarePen/>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
// import Link from "next/link";
// import RemoveBtn from "./RemoveBtn";
// import { SquarePen } from "lucide-react";
// // import { HiPencilAlt } from "react-icons/hi";

// const getTopics = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/todo", {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch topics");
//     }
//     const data= await res.json()
//     console.log(data)
//     return data;
//   } catch (error) {
//     console.log("Error loading topics: ", error);
//   }
// };

// export default async function TopicsList() {
//   const  topics  = await getTopics();

//   return (
//     <>
//       {topics.map((t) => (
//         <div
//           key={t._id}
//           className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
//         >
//           <div>
//             <h2 className="font-bold text-2xl">{t.title}</h2>
//             <div>{t.description}</div>
//           </div>

//           <div className="flex gap-2">
//             <RemoveBtn id={t._id} />
//             <Link href={`/editTopic/${t._id}`}>
//               {/* <HiPencilAlt size={24} /> */}
//               <SquarePen/>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }