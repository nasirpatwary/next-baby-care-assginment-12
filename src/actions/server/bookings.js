"use server"

import apiAxios from "@/lib/apiAxios"

const { authOptions } = require("@/lib/authOptions")
const { getServerSession } = require("next-auth")


export const addToBookings = async (payload) => {
    console.log(payload)
    const {user} = await getServerSession(authOptions) || {}
    if (!user) {
        return {message: "booking failed", success: false}
    }
    const {data} = await apiAxios.post("/api/bookings", payload)
    return {success: data.bookings.acknowledged}
}