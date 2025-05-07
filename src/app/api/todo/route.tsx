import dbConnect from "@/lib/db";
import { ITodo, Todo } from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    try {
        await dbConnect()
        const data=await Todo.find().lean()
        return NextResponse.json(data, {status:200})
    } catch (error) {
        return NextResponse.json({message:"failed to get the data"},{status:401})
    }
}
export async function POST(req: NextRequest) {
    try {
        const data:ITodo=await req.json()
        await dbConnect()
        const newData= await Todo.create({
            ...data,
            description: data.description
        })
        return NextResponse.json(newData,{status:200})
    } catch (error) {
        return NextResponse.json({message:"Getting error"},{status:403})
    }
    
}