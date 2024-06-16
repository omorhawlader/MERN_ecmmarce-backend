import { TryCatch } from "../middlewares/error.js";
import { Product } from "../models/product.js";
import ErrorHandler from "../utils/util-class-error-handler.js";
import { rm } from "fs";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, category, price, stock } = req.body;
    const photo = req.file;
    if (!photo) {
        return next(new ErrorHandler("please add photo", 400));
    }
    if (!name || !category || !price || !stock) {
        rm(photo.path, () => console.log("deleted"));
        return next(new ErrorHandler("Require All Fields", 400));
    }
    await Product.create({ name, category: category.toLowerCase(), price, stock, photo: photo?.path });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully"
    });
});
export const getLatesProduct = TryCatch(() => { });
