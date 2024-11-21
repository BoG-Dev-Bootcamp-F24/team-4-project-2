import dbConnect from "@/db/dbConnect";
import UserModel from "@/db/schemas/UserModel";

export async function GET() {
    await dbConnect();

    const users = await UserModel.find();
    const noPassword = users.map(user => {
        const { password, ...rest } = user.toObject();
        return rest;
    });
    return Response.json(noPassword);
}