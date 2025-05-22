import dbConnect from "@/lib/db";
import { DeleTodo, ITodo } from "@/models/todo";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        await dbConnect()
        const data=await DeleTodo.find().lean()
        return NextResponse.json(data,{status:200})
    } catch (error) {
        return NextResponse.json({message:"ErrorGet:"+error},{status:401})
    }
}
export async function POST(req:NextRequest) {
    try {
        const data:ITodo = await req.json()
    await dbConnect()
    const newData= await DeleTodo.create({
        ...data,
        description: data.description
    })
    return NextResponse.json(newData,{status:200})
    } catch (error) {
        return NextResponse.json({message:"ErrorPost:"+error},{status:401})
    }
} 