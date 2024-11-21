import dbConnect from "@/db/dbConnect";
import UserModel from "@/db/schemas/UserModel";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();

        const user = await UserModel.create(body);

        return Response.json(user);
    } catch(error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return Response.json({ message: 'Incorrect Body' }, { status: 400 });
        } else {
            return Response.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}