import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes.js';
import messageRouter from './routes/message.Routes.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.get("/",(req,res)=>{
    res.send("Server is Online")
})

app.use('/api/auth', authRouter);
app.use('api/message', messageRouter)

export default app;