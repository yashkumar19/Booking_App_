import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();   // is used to create modular and mountable route handlers in an Express application.

// // Here we check that user login ir not menas user have access token or not and token is vaid or not
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// })

// // Here we verify the user if not so he/she is not authorized
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account!")
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello Admin, you are logged in and you can delete all accounts!")
// })

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router

// We use Export so by this we can use it anywhere means access from anywhere