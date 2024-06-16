import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    name: {
        type: String,
        requier: [true, "please Enter Name"]
    },
    photo: {
        type: String,
        requier: [true, "please Enter Photo"]
    },
    price: {
        type: Number,
        requier: [true, "please Enter Prce"]
    },
    stock: {
        type: Number,
        require: [true, "Enter Stock"]
    },
    category: {
        type: String,
        require: [true, "Enter Product Category"],
        trim: true
    }
}, {
    timestamps: true
});
export const Product = mongoose.model("product", schema);
