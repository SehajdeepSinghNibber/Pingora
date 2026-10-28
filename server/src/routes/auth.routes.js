import { Router } from "express";
import { logIn, logOut, signUp, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', logIn);
authRouter.post('/logout', logOut);

authRouter.put('/upsate-profile', protectRoute, updateProfile);

authRouter.get('/check', protectRoute, checkAuth)

export default authRouter;