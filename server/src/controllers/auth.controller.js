import User from "../models/user.model.js";
import { generateToken } from "../utils/generateJwtAndSetCookies.js";
import bcrypt from 'bcryptjs'

export const signUp = async (req,res) =>{

    const { username, password, email } = req.body;

    try {

        if(!password || password.length < 6){
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
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        })
    }

}

export const logIn = async (req,res) =>{

}

export const logOut = async (req,res) =>{

}