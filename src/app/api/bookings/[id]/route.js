import { collections, dbConnect } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"
const bookingCollection = await dbConnect(collections.Bookings)
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    if (id.length !== 24) {
      return NextResponse.json({ status: false, message: "Invalid ID" }, { status: 400 });
    }
    const query = { _id: new ObjectId(id) };
    const result = await bookingCollection.deleteOne(query);
    return NextResponse.json({ status: true, result });
  } catch (error) {
    return NextResponse.json({ status: false, error: error.message }, { status: 500 });
  }
}