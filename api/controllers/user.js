/* We make this another folder hotel because if a person have the URL so the easily access the info of hotels.js so avoid these kind of stuff we need somthing better that's why we make this and then we add the authentication by which noone access it easily */

import User from "../models/User.js";

export const updateUser = async (req,res,next)=>{
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
  export const deleteUser = async (req,res,next)=>{
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  }
  export const getUser = async (req,res,next)=>{
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }
  export const getUsers = async (req,res,next)=>{
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }