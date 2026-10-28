import User from "../models/user.model.js";
import { generateToken } from "../utils/generateJwtAndSetCookies.js";
import cloudinary from "../lib/cloudinary.js";
import bcrypt from 'bcryptjs'

export const signUp = async (req,res) =>{

    const { username, password, email } = req.body;

    try {

        if (!username || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if(password.length < 6){
            return res.status(400).json({
                message: "minimum length required for password is 6 characters"
            })
        }

        const user = await User.findOne({
            $or:[{username},{email}]
        });

        if(user){
            return res.status(409).json({
                message:"username or email is already taken"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save();

        if(newUser){
            generateToken(newUser._id,res);

            res.status(200).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic
            })
        }
        else{
            res.status(400).json({
                message: "Invalid User credentials"
            });
        }

    } catch (error) {
        console.log("Sign Up error");
        console.log(error.message);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

export const logIn = async (req,res) =>{

    const { password, email } = req.body;

    try {

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(401).json({
                message:"Email is not registered"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                message:"Invalid Credentials"
            })
        }

        generateToken(user._id,res);

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic
        })
    }
        

    catch (error) {
        console.log("Log In error");
        console.log(error.message);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

export const logOut = async (req,res) =>{

    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({
            message: "Logged Out Successfully"
        })


        //BETTER METHOD BELOW 

        // res.clearCookie("jwt", {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === "production",
        //     sameSite: "strict"
        // });

    } catch (error) {
        console.log("Log Out error");
        console.log(error.message);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

export const updateProfile = async (req,res) => {
    try {
        
        const { profilePic } = req.body;
        const userId = req.user._id;

        if(!profilePic){
            return res.status(400).json({
                message: "Profile Pic is Required"
            })
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updateUser = await User.findByIdAndUpdate(userId,{
            profilePic: uploadResponse.secure_url
        },{
            new : true
        }).select("-password");

        res.status(200).json(updateUser);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const checkAuth = async (req,res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}