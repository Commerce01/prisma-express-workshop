import express, {Request,Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import postController from './controllers/post.controller';

dotenv.config();

const app =express();
const port = process.env.port || 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use("/api/posts",postController)

app.get("/", (req: Request, res: Response) => {
    res.send("hi");
});

app.listen(port,() => console.log(`[Server] : Server is running on http://localhost:${port}`)
);