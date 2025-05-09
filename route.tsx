import dbConnect from "@/lib/db";
import { Todo } from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req:NextRequest,{ params }: { params: { id: string } }) {
    const { id }= params
    const newDesc=await req.json()
    await dbConnect()
    const data= await Todo.findByIdAndUpdate(id,{description: newDesc})
    return NextResponse.json({message: "updated susscully", data},{status:201})
}
export async function GET(req:NextRequest,{ params }: { params: { id: string } }){
    const {id} = params
    await dbConnect()
    const data= await Todo.findOne({_id:id})
    return NextResponse.json({data},{status:201})
}