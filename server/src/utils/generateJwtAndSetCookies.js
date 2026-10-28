import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

const JWT_SECRET = config.JWT_SECRET;

export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},JWT_SECRET,{
        expiresIn: '7d',
    } )

    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        sameSite : "strict",
        secure : config.NODE_ENV === "production"
    })
}