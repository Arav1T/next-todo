import dbConnect from "@/lib/db";
import { Todo } from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req:NextRequest,{ params }: { params: { id: string } }) {
    const { id }= params
    const newDesc=await req.json()
    console.log("newsDesc",newDesc)
    await dbConnect()
    const data= await Todo.findByIdAndUpdate(id,{description: newDesc})
    return NextResponse.json({message: "updated susscully", data},{status:201})
}
export async function GET(req:NextRequest,{ params }: { params: { id: string } }){
    const id = params.id
    await dbConnect()
    const data= await Todo.findOne({_id:id})
    return NextResponse.json({data},{status:201})
}