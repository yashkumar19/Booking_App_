import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();   // is used to create modular and mountable route handlers in an Express application.

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);

router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms); 
 
export default router