import express from "express";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();        // is used to create modular and mountable route handlers in an Express application.

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);       // when we are count hotel by city there is issue regarding id and /countBycity and /:id we need id so that'swhy we put find to find the city and count it.

//GET ALL
router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router