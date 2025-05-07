import  mongoose  from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI!
if(!MONGODB_URI){
    throw new Error("Please check your env")
}
let cached = global.mongoose
if(!cached){
    cached=global.mongoose={conn:null, promise:null}
}
async function dbConnect(){
    if(cached.conn){return cached.conn}
    if(!cached.promise){
        cached.promise=mongoose.connect(MONGODB_URI,{bufferCommands:false}).then((mongoose)=>{return mongoose})
    }
    try {
        cached.conn = await cached.promise
        return cached.conn
    } catch (error) {
        
    }
}

export default dbConnect