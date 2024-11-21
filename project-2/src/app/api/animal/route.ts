import dbConnect from "@/db/dbConnect";
import AnimalModel from "@/db/schemas/AnimalModel";

export async function POST(request: Request) {
    await dbConnect();

    const body = await request.json();
    AnimalModel.create(body);

    return Response.json({ message: 'success' });
}