/* We make this another folder hotel because if a person have the URL so the easily access the info of hotels.js so avoid these kind of stuff we need somthing better that's why we make this and then we add the authentication by which noone access it easily */

import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import Jwt  from "jsonwebtoken";

//Register the user details

export const register = async(req,res,next)=>{
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUSer = new User({
            ...req.body,
            password : hash,
        }) 
        
        await newUSer.save()
        res.status(200).send("User has been Created")

    } catch (err) {
        next(err)
    } 
} 


//Login details

export const login = async(req,res,next)=>{
    try {

        // Here we find that user exist or not
        const user = await User.findOne({username:req.body.username});
        if(!user) return next(createError(404,"User not found!"))
        
        //Here we find that password we entered is same as user password or not 
        const ispasswordCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!ispasswordCorrect) return next(createError(400,"Wrong Password or Username!"))

        const token = Jwt.sign({id:user._id,isAdmin:user.isAdmin}, process.env.JWT);  

        //In this we hide the pswrd and the isAdmin and using the cookie now it will be more secure
        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({details:{...otherDetails}, isAdmin});

    } catch (err) {
        next(err)
    }  
}

