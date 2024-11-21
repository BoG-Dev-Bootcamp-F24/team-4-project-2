import dbConnect from "@/db/dbConnect";
import TrainingLogModel from "@/db/schemas/TrainingLogModel";

export async function GET() {
    await dbConnect();

    const trainingLogs = await TrainingLogModel.find();
    
    return Response.json(trainingLogs.map((trainingLog) => trainingLog.toObject()));
}