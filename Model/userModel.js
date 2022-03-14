import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    Name: String,
    Email: String,
    Mobile: String,
    CountryCode:String,
    Password:String

})

const model=mongoose.model("UserModel",userSchema);
export default model;
