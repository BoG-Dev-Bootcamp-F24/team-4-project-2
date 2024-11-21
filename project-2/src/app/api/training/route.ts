import dbConnect from "@/db/dbConnect";
import TrainingLogModel from "@/db/schemas/TrainingLogModel";

export async function POST(request: Request) {
    await dbConnect();

    const body = await request.json();
    TrainingLogModel.create(body);

    return Response.json({ message: 'success' });
}