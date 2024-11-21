import dbConnect from "@/db/dbConnect";
import AnimalModel from "@/db/schemas/AnimalModel";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();

        const animal = await AnimalModel.create(body);

        return Response.json(animal);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return Response.json({ message: 'Incorrect Body' }, { status: 400 });
        } else {
            return Response.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}