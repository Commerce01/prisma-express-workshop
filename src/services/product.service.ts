import exp from "constants";
import { IProduct } from "../dtos/product.dto";
import { prisma } from "../libs/prisma";

async function getProduct() {
  const product = await prisma.product.findMany();
  return product;
}

async function getProductById(id: number) {
  const product = await prisma.product.findMany({
    where: { id },
  });
  return product;
}

async function createProduct({ name, description, stock , image }: IProduct) {
  const product = await prisma.product.create({
    data: { name, description, stock , image },
  });
  return product;
}

async function updateProduct(
  { name, description, stock , image }: IProduct,
  id: number
) {
  const product = await prisma.product.update({
    where: { id },
    data: { name, description, stock , image },
  });
  return product;
}

async function deleteProduct(id: number) {
  const product = await prisma.product.delete({
    where: { id },
  });
  return product;
}

export {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
