import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({    // mongoose.schema:- is a constructor function that is used to define the structure and attributes of documents that will be stored in a MongoDB collection
                                             
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true }
);
    export default mongoose.model("User", UserSchema)