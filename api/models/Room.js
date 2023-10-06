import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({    // mongoose.schema:- is a constructor function that is used to define the structure and attributes of documents that will be stored in a MongoDB collection
                                               
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumber: [{ number: Number, unavailableDates: {type: [Date]}}],
},
{ timestamps: true }
);

export default mongoose.model("Room", RoomSchema);