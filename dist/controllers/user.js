import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/util-class-error-handler.js";
export const newUser = TryCatch(async (req, res, next) => {
    const { name, email, photo, _id, dob, gender } = req.body;
    let user = await User.findById(_id);
    if (user) {
        // if user exist 
        return res.status(200).json({
            success: true,
            message: `Welcome back, ${user.name}`
        });
    }
    if (!name || !email || !photo || !_id || !dob || !gender)
        return next(new ErrorHandler("require all fileds", 400));
    user = await User.create({ name, email, photo, _id, dob: new Date(dob), gender });
    return res.status(201).json({
        success: true,
        message: `welcome, ${user?.name}`
    });
});
export const getAllUser = TryCatch(async (req, res, next) => {
    const users = await User.find({});
    return res.status(200).json({
        success: true,
        users
    });
});
export const getUser = TryCatch(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("invalid ID", 400));
    return res.status(200).json({
        success: true,
        user
    });
});
export const deleteUser = TryCatch(async (req, res, next) => {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user)
        return next(new ErrorHandler("invalid ID", 400));
    await user.deleteOne();
    return res.status(200).json({
        success: true,
        message: "user deleted successfully"
    });
});
