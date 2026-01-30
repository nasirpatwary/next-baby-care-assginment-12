"use server"
import apiAxios from "@/lib/apiAxios"
export const getAllServices = async () => {
    const {data} = await apiAxios.get("/api/services")
    return data.services
}
export const getGingleService = async (id) => {
    try {
        const { data } = await apiAxios.get(`/api/services/${id}`);
        return data.service;
    } catch (error) {
        console.error("Error fetching single service:", error);
        return null; // অথবা এরর মেসেজ হ্যান্ডল করতে পারেন
    }
};