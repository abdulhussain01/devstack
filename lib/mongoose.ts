import mongoose from "mongoose"

let isConnected: boolean = false;


export const connectToDB  = async ()=>{

    

    mongoose.set("strictQuery",true)
    if(!process.env.MONGODB_URL){
        return console.log("Missing mongodb url")
    }
    if (isConnected) {
        return console.log("mongodb already connected")
    }

    try {
       await mongoose.connect(process.env.MONGODB_URL,{
            dbName:"devstack"
        })
        
        isConnected=true
        console.log("Mongodb Connected")
    } catch (error) {
        
        console.log("Mongogb connection failed",error)
    }
}