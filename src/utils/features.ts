import mongoose from 'mongoose'


export const connectDB = ()=>{
    mongoose.connect('mongodb://localhost:27017',{
        dbName:"E_commarce_omar_2024"
    })
    .then((connect)=>console.log(`DB Connected To The ${connect.connection.host}`))
    .catch((error)=> console.error(error))
}