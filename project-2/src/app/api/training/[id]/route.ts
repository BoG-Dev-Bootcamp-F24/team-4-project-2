import dbConnect from "@/db/dbConnect";
import AnimalModel from "@/db/schemas/AnimalModel";
import TrainingLogModel from "@/db/schemas/TrainingLogModel";
import mongoose from "mongoose";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string}> }) {
    try {
        await dbConnect();

        const body = await request.json();
        const id = (await params).id;
        const res = await TrainingLogModel.findByIdAndUpdate(id, body);

        const animal = body.animal;
        const hoursDiff = body.hours - res.hours;

        const dbAnimal = await AnimalModel.findById(animal);
        if (!dbAnimal) {
            return Response.json({ message: 'Training log animal is not owned by specified user' }, { status: 400 });
        }

        dbAnimal.hoursTrained += hoursDiff;
        await dbAnimal.save();
        
        return Response.json(res);
        } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return Response.json({ message: 'Incorrect Body' }, { status: 400 });
        } else {
            return Response.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();

        const id = (await params).id;

        const trainingLog = await TrainingLogModel.findById(id);
        if (!trainingLog) {
            return Response.json({ message: 'Training log not found' }, { status: 404 });
        }

        const dbAnimal = await AnimalModel.findOne({
            _id: trainingLog.animal,
            owner: trainingLog.user,
        });

        if (!dbAnimal) {
            return Response.json({ message: 'Training log animal is not owned by specified user' }, { status: 400 });
        }

        dbAnimal.hoursTrained -= trainingLog.hours;
        await dbAnimal.save();

        await TrainingLogModel.deleteOne({ _id: id });

        return Response.json({ message: 'success' });
    } catch (error) {
        console.log(error);
        if (error instanceof mongoose.Error.ValidationError) {
            return Response.json({ message: 'Incorrect Body' }, { status: 400 });
        } else {
            return Response.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}