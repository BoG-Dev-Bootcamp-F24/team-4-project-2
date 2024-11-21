import dbConnect from "@/db/dbConnect";
import UserModel from "@/db/schemas/UserModel";

export async function POST(request: Request) {
    await dbConnect();

    const body = await request.json();
    UserModel.create(body);

    return Response.json({ message: 'success' });
}