"use server"
import apiAxios from '@/lib/apiAxios';
import { collections, dbConnect } from '@/lib/dbConnect';
import bcrypt from 'bcryptjs';
const userCollection = await dbConnect(collections.USERS)
export const createPostUser = async (payload) => {
    const hashedPassword = await bcrypt.hash(payload?.password, 10);
    const {data} = await apiAxios.post("/api/users", {...payload, password: hashedPassword})
    return data
}
export const loginUser = async (payload) => {
    const {email, password} = payload
    const user = await userCollection.findOne({email})
    if(!user) return null
    const isPassword = await bcrypt.compare(password, user?.password);
    if (isPassword) {
        return user
    }
}