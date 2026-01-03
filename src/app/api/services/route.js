
import { collections, dbConnect } from "@/lib/dbConnect"

const serviceCollection = await dbConnect(collections.SERVICES)
export async function GET(req) {
  const services = await serviceCollection.find().toArray()
  return Response.json({
    status: true,
    message: "services successfully!",
    services
  })
}