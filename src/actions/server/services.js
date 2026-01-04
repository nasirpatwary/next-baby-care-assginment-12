"use server"

import apiAxios from "@/lib/apiAxios"

export const getAllServices = async () => {
    const {data} = await apiAxios.get("/api/services")
    return data.services
}
export const getGingleService = async (id) => {
    const {data} = await apiAxios.get(`/api/services/${id}`)
    return data.service
}