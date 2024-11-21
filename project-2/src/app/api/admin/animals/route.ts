import dbConnect from "@/db/dbConnect";
import AnimalModel from "@/db/schemas/AnimalModel";

export async function GET() {
    await dbConnect();

    const animals = await AnimalModel.find();
    
    return Response.json(animals.map((animal) => animal.toObject()));
}