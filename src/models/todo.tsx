import mongoose, { model, Model, models, Schema } from "mongoose";

export interface ITodo extends Document {
    _id?:mongoose.Types.ObjectId,
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

const todSchema=new Schema<ITodo>({
    
    description:{type:String,required:true},
    
},{timestamps:true})
const deltodSchema=new Schema<ITodo>({
    
    description:{type:String,required:true},
    
},{timestamps:true})

export const DeleTodo= models.DeleTodo || model<ITodo>('DeleTodo',deltodSchema)
export const Todo= models.Todo || model<ITodo>('Todo',todSchema)