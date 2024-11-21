import dbConnect from "@/db/dbConnect";
import UserModel from "@/db/schemas/UserModel";

export async function POST(request: Request) {
    await dbConnect();
    const body = await request.json();

    const { email, password } = body;
    const res = await UserModel.findOne({
        email,
        password
    });

    if (res) {
        return Response.json({ message: 'success' });
    }
    
    return Response.error();
}