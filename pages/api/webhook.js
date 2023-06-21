import { mongooseConnect } from "@/lib/mongoose";

export default async function handler(req,res) {
    await mongooseConnect();
}