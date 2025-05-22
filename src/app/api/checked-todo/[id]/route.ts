import dbConnect from "@/lib/db"
import { DeleTodo } from "@/models/todo"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req:NextRequest,{params}:{params:{id:string}}) {
    const {id} = params
    await dbConnect()
    const data = await DeleTodo.findByIdAndDelete(id)
    return NextResponse.json({message:"deleted sussfully", data},{status:201})
}