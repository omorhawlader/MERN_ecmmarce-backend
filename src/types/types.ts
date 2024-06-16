import { NextFunction, Request, Response } from "express";

export interface newuserreqbody{
    _id: string,
    name:string;
    email:string;
    photo:string;
    gender:string;
    dob:Date;
}

export interface newproductreqbody{
    name:string;
    category:string;
    price:number;
    stock:number;
}   