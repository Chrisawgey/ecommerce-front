import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
    await mongooseConnect();
    const {categories} = req.query;
    res.json( await Product.find({category:categories.split(',')}) );
} 