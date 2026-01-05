"use client"
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import locationData from "@/lib/data/data.json";
import FormSelect from "./FormSelect";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { convertToHours } from "@/utils/convertToHours";
import { addToBookings } from "@/actions/server/bookings";
import toast from "react-hot-toast";

const FormBooing = ({service_charge, hourly_rate, service_name}) => {
  const router = useRouter()
  const path = usePathname()
  const session = useSession()
  const user = session?.status === "authenticated"
  const { control, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      duration: "",
      division: "",
      district: "",
      city: "",
      area: "",
    },
  });

  const selectedDivision = watch("division");
  const selectedDistrict = watch("district");
  const selectedCity = watch("city");

  const divisionOptions = useMemo(() => {
    const uniqueDivisions = [...new Set(locationData.map((item) => item.region))];
    return uniqueDivisions.map((d) => ({ label: d, value: d }));
  }, []);

  const districtOptions = useMemo(() => {
    if (!selectedDivision) return [];
    const filtered = locationData.filter((item) => item.region === selectedDivision);
    return filtered.map((item) => ({ label: item.district, value: item.district }));
  }, [selectedDivision]);

  const cityOptions = useMemo(() => {
    if (!selectedDistrict) return [];
    const filtered = locationData.filter((item) => item.district === selectedDistrict);
    return filtered.map((item) => ({ label: item.city, value: item.city }));
  }, [selectedDistrict]);

  const areaOptions = useMemo(() => {
    if (!selectedCity) return [];
    const found = locationData.find((item) => item.city === selectedCity);
    return found ? found.covered_area.map((a) => ({ label: a, value: a })) : [];
  }, [selectedCity]);

  useEffect(() => { setValue("district", ""); setValue("city", ""); setValue("area", ""); }, [selectedDivision, setValue]);
  useEffect(() => { setValue("city", ""); setValue("area", ""); }, [selectedDistrict, setValue]);
  useEffect(() => { setValue("area", ""); }, [selectedCity, setValue]);


 const onSubmit = async (data) => {
   try {
    if (!user) {
      return router.push(`/login?callback=${path}`)
    }
    const {duration, district, division, area, city} = data
   const totalHours = convertToHours(duration)
   const totalCost = service_charge + hourly_rate * totalHours;
   const bookings = {
    email: session?.data?.user?.email,
    service_name,
    totalCost,
    district,
    division,
    area,
    city,
    status: "pending"
   }
   const {success} = await addToBookings(bookings)
   if (success) {
    toast.success(`bookings ${service_name} successfully!`)
    router.push("/my-booking")
   }else{
    toast.error("Opps Something Wrong Heppen!")
   }
   } catch (error) {
    console.log("bookings failed", error)
   }
 }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border border-base-200 p-4 md:p-6 grid grid-cols-1 gap-4">
    
      <FormSelect
        name="duration"
        control={control}
        label="Select Duration"
        rules={{ 
              required: "duration is required",
            }}
        options={[
          { label: "1 Day", value: "1d" },
          { label: "1 Hour", value: "1h" },
          { label: "2 Day", value: "2d" },
          { label: "2 Hour", value: "2h" },
          { label: "5 Day", value: "5d" },
          { label: "5 Hour", value: "5h" },
          { label: "7 Day", value: "7d" },
          { label: "7 Hour", value: "7h" },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-4">
        <FormSelect
          name="division"
          control={control}
          label="Division"
          options={divisionOptions}
          rules={{ 
              required: "division is required",
            }}
        />

        <FormSelect
          name="district"
          control={control}
          label="District"
          options={districtOptions}
          rules={{ 
              required: "district is required",
            }}
        />

        <FormSelect
          name="city"
          control={control}
          label="City"
          options={cityOptions}
          rules={{ 
              required: "city is required",
            }}
        />

        <FormSelect
          name="area"
          control={control}
          label="Area / Address"
          options={areaOptions}
          rules={{ 
              required: "area is required",
            }}
        />
      </div>
      <button type="submit" className="btn btn-primary w-full mt-4">
          Confirm Booking  
      </button>
    </form>
  );
};

export default FormBooing;