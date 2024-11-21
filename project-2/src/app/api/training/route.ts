import dbConnect from "@/db/dbConnect";
import AnimalModel from "@/db/schemas/AnimalModel";
import TrainingLogModel from "@/db/schemas/TrainingLogModel";
import mongoose from "mongoose";

export async function POST(request: Request) {
    try {
        await dbConnect();

        const body = await request.json();

        const { animal, user } = body;
        const dbAnimal = await AnimalModel.findOne({
            _id: animal,
            owner: user,
        });

        if (!dbAnimal) {
            return Response.json({ message: 'training log animal is not owned by specified user' }, { status: 400 });
        }

        const trainingLog = await TrainingLogModel.create(body);

        const newHours = dbAnimal.hoursTrained + trainingLog.hours;
        await AnimalModel.findOneAndUpdate({
            _id: animal,
        }, {
            hoursTrained: newHours,
        });

        return Response.json(trainingLog);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return Response.json({ message: 'Incorrect Body' }, { status: 400 });
        } else {
            return Response.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}