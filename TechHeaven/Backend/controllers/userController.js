 import userModel from "../models/userModel.js";
 import jwt from "jsonwebtoken";
 import bcrypt from "bcrypt";
 import validator from "validator"


 //login user

 const loginUser = async (req, res) => {
     const { email, password } = req.body;
 }
 const createToken =  (id) => {
        return jwt.sign({id},process.env.JWT_SECRET)
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
    const user = await newUser.save()
    const token=createToken(user._id)
    res.json({success: true, token})
     } catch (error) {
        console.log(error);
        res.json({success: false, message:"error user"})
     }
 }
 export  {registerUser,loginUser}