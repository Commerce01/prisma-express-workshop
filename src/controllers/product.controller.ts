import { Router,Request,Response } from "express";
import { createProduct, getProduct, getProductById, updateProduct } from "../services/product.service";
import { IProduct } from "../dtos/product.dto";
import { create } from "domain";
import exp from "constants";



const productController = Router();

productController.get("/", async(req:Request, res: Response) => {
    const product = await getProduct();
    res.status(200).json(product);
});

productController.get("/", async (req: Request<IProduct> , res: Response) => {
    const { id } = req.params;
    const product = await getProductById(Number(id));
    res.status(200).json(product);
});

productController.post('/', async ( req : Request<IProduct>, res: Response) => {
    const { name , description , stock , image } = req.body;
    const product = await createProduct({ name ,description ,stock ,image});
    res.status(201).json(product);
});

productController.patch("/:id", async(req: Request<IProduct> , res: Response) => {
    const { id } =req.params;
    const { name ,description,stock,image} = req.body;
    const Numberid = Number(id);
    const product = await updateProduct({name,description,stock,image},Numberid);
    res.status(200).json(product);
});

export default productController;