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

// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;
// if (!MONGODB_URI) {
//     throw new Error("Please check your env");
// }

// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//     if (cached.conn) {
//         // Connection is already established, return it
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         // mongoose.connect() returns a Promise<typeof mongoose> which resolves to the mongoose instance, not just the connection.
//         cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((mongooseInstance) => mongooseInstance.connection);
//     }

//     try {
//         cached.conn = await cached.promise;
//         return cached.conn;
//     } catch (error) {
//         console.error("MongoDB connection error:", error);
//         throw new Error("Failed to connect to MongoDB");
//     }
// }

// export default dbConnect;
