import mongoose from 'mongoose'
import validator from 'validator'

interface Iuser extends Document {
    _id:string;
    name:string;
    email:string;
    photo:string;
    role:"admin" | "user";
    gender:"male" | "female";
    dob: Date;
    createdAt:Date;
    updatedAt:Date;
    // virtual Attribute 
    age:number;
}


const schema = new mongoose.Schema({
    _id:{
        type: String,
        require: [true,"Enter ID"]
    },
    name:{
        type: String,
        require: [true,"Enter add name"]
    },
    email:{
        type: String,
        unique:[true, "Email already Exist"],
        require: [true,"Enter add Email"],
        validate: validator.default.isEmail
    },
    photo:{
        type: String,
        require: [true,"Enter add Photo"]
    },
    role:{
        type: String,
        enum: ["admin","user"],
        default: "user"
    },
    gender:{
        type: String,
        enum: ["male","female"],
        require: [true, "Please Enter Your Gender"]
    },
    dob:{type: Date,require:[true,"Please Enter Your Date of birth"]},



},{timestamps:true})

schema.virtual("age").get(function(){
    const currentDate = new Date() // 14 - 6 - 2024
    const dob = this.dob // 26 - 3 - 2003
    let age = currentDate.getFullYear() - dob?.getFullYear()! //21
    if(currentDate.getMonth() < dob?.getMonth()! || (currentDate.getMonth() === dob?.getMonth() && currentDate.getDate() < dob.getDate()))
        age--

    return age
    
})
export const User = mongoose.model<Iuser>('User',schema)
