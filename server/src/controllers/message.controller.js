import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;

        const filteredUsers = await User.find({
            _id: { $ne: loggedInUser }
        }).select("-password");

        return res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChat } = req.params;
        const myId = req.user._id;

        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: userToChat },
                { senderId: userToChat, receiverId: myId }
            ]
        }).sort({ createdAt: 1 });

        return res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        if ((!text || !text.trim()) && !image) {
            return res.status(400).json({
                message: "Message text or image is required"
            });
        }

        let imageUrl;

        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        });

        await newMessage.save();

        // TODO: Add Socket.IO real-time functionality.

        return res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage:", error.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
