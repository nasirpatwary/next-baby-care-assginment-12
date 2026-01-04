import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
const serviceCollection = await dbConnect(collections.SERVICES)
export async function GET(req, { params }) {
    try {
        const { id } = await params;
        if (!id || id.length !== 24) {
            return Response.json(
                { message: "Invalid review ID format" }, 
                { status: 400 }
            );
        }
        const filter = { _id: new ObjectId(id) };
        const service = await serviceCollection.findOne(filter);
        if (!service) {
            return Response.json(
                { message: "Service not found" }, 
                { status: 404 }
            );
        }

        return Response.json({
            service,
            message: "Service found successfully!"
        });

    } catch (error) {
        console.error("Database Error:", error);
        return Response.json(
            { message: "Internal Server Error" }, 
            { status: 500 }
        );
    }
}