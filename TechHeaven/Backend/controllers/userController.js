 import userModel from "../models/userModel";
 import jwt from "jsonwebtoken";
 import bcrypt from "bcrypt";
 import validator from "validator"


 //login user

 const loginUser = async (req, res) => {
     const { email, password } = req.body;
 }
 //register user

 const registerUser = async (req, res) => {
     const { name, email, password } = req.body;
     try {
        //check already registered
        const exists = await userModel.findOne({ email});
        if (exists) {
            return res.json({success: false, message:"User already exists"})
        } 
    //validating email password
    if (!validator.isEmail(email)) {
        return res.json({success: false, message:"Please enter a valid email"})
    }

    if (password.length < 8) {
        return res.json({success: false, message:"Please enter a Strong password"})
    }
    //hasing password

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)


    const newUser=new userModel({
        name:name,
        email:email,
        password:hashedPassword
    })
     } catch (error) {
        
     }
 }
 export  {registerUser,loginUser}