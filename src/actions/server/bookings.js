"use server"

import apiAxios from "@/lib/apiAxios"
import { collections, dbConnect } from "@/lib/dbConnect"
import { OrderInvoiceTemplate } from "@/lib/OrderInvoiceTemplate"
import { sendEmail } from "./sendEmail"

const { authOptions } = require("@/lib/authOptions")
const { getServerSession } = require("next-auth")
const bookingCollection = await dbConnect(collections.Bookings)

export const getAllBookings = async () => {
     const {user} = await getServerSession(authOptions) || {}
        if (!user) {
            return []
        }
        const filter = {email: user?.email}
        const bookings = await bookingCollection.find(filter).toArray() 
        const formattedResult = bookings.map(item => ({
            ...item,
            _id: item._id.toString()
        })); 
        return formattedResult
}
export const addToBookings = async (payload) => {
    const {user} = await getServerSession(authOptions) || {}
    if (!user) {
    return {message: "booking failed", success: false}
    }
    const {data} = await apiAxios.post("/api/bookings", payload)
    try {
        await sendEmail({
        to: user?.email,
        subject: 'Your Order Invoice Baby Care',
        html: OrderInvoiceTemplate({ 
        bookingData: payload,
        orderId: data?.bookings?.insertedId.toString()
        }),
        });
        } catch (error) {
            console.error("Email failed to send:", error);
        }
    return {success: data.bookings.acknowledged}
}


export const cancelBooking = async (id) => {
    const {data} = await apiAxios.delete(`/api/bookings/${id}`)
    return data.result
}