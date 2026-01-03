import { collections, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

const userCollection = await dbConnect(collections.USERS)
export async function POST(request) {
  const body = await request.json();
  const exitingUser = await userCollection.findOne({email: body?.email})
  if (exitingUser) {
    return NextResponse.json({
        status: 400,
        message: "user already exists"
    })
  }
  const newUser = await userCollection.insertOne(body)
  return NextResponse.json({ 
    status: 201,
    message: "Data saved successfully", 
    users: newUser 
  });
}