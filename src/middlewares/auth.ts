import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/util-class-error-handler.js";
import { TryCatch } from "./error.js";


export const adminOnly = TryCatch(async (req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.query
    if(!id) return next(new ErrorHandler("User Not Logged in",401))
        
    const user = await User.findById(id)
    
    if(!user) return next(new ErrorHandler("Invalid ID",401))

    if(user.role !== "admin") return next(new ErrorHandler("Permission denied",401))
        
    next()    
})