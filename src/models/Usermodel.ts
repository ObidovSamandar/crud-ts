import mongoose, {Schema, Document } from "mongoose"


export interface IUser extends Document{
    fname:string,
    sname:string,
    job:string
}

let userSchema = new mongoose.Schema({
    fname: {
        type:String,
        required:true,
    },
    sname: {
        type:String,
        required:true
    },
    job: {
        type:String,
        required:true
    }
})


export default mongoose.model<IUser>("CrudUser",userSchema)