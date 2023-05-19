import { Router, Request, Response } from "express";
import {
  createPost,
  deletePost,
  getPosts,
  getPostsById,
  updatePost,
} from "../services/post.service";
import { IPost } from "../dtos/post.dto";
import { ucs2 } from "punycode";

const postController = Router();

postController.get("/", async (req: Request, res: Response) => {
  const post = await getPosts();
  res.status(200).json(post);
});

postController.get("/:id", async (req: Request<IPost>, res: Response) => {
  const { id } = req.params;
  const post = await getPostsById(Number(id));
  res.status(200).json(post);
});

postController.post("/", async (req: Request<IPost>, res: Response) => {
  const { title, content, author } = req.body;
  const post = await createPost({ title, content, author });
  res.status(201).json(post);
});

postController.patch("/:id", async (req: Request<IPost>, res: Response) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  const Numberid = Number(id);
  const post = await updatePost({ title, content, author },Numberid);
  res.status(200).json(post);
});

postController.delete("/:id", async (req: Request<IPost>, res: Response) => {
  const { id } = req.params;
  const post = await deletePost(Number(id));
  res.status(200).json(post);
});

export default postController;
