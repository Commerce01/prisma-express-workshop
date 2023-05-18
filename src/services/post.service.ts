import { IPost } from "../dtos/post.dto";
import { prisma } from "../libs/prisma";
import { Request, Response } from "express";

async function getPosts() {
  const post = await prisma.post.findMany();
  return post;
}

async function getPostsById(id:number) {
  const post = await prisma.post.findMany({
    where: { id },
  });
  return post;
}

async function createPost({ title, content, author }: IPost) {
  const post = await prisma.post.create({data:{ title, content, author }});
  return post;
}

async function updatePost({ title, content, author }: IPost,id:number) {
  const post = await prisma.post.update({
    where: { id },
    data: { title, content, author },
  });
  return post;
}

async function deletePost(id:number) {
  const post = await prisma.post.delete({ where: { id } });
  return post;
}

export { getPosts, getPostsById, createPost, updatePost, deletePost };
