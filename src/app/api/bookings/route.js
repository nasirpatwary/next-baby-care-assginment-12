import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

const bookingCollection = await dbConnect(collections.Bookings);
export async function POST(request) {
  try {
  const body = await request.json();
  const newBookings = await bookingCollection.insertOne(body)
  return NextResponse.json({ 
    status: 201,
    message: "Data saved successfully", 
    bookings: newBookings 
  });
  } catch (error) {
    console.log(error)
  }
}