"use client"
import { Card, CardHeader, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { image, category, service_name, experience, service_charge, location, _id } = service || {}

  return (
    <div>
      <Card isFooterBlurred className="h-[340px] w-full border-none ring-1 ring-black/5 dark:ring-white/10 shadow-lg">
        {/* Header Section */}
        <CardHeader className="absolute z-10 flex justify-between top-1 items-start gap-2">
          <p className="text-[10px] bg-primary py-1 px-3 text-white rounded-full uppercase font-bold tracking-wider shadow-sm">
            {experience}
          </p>
          <p className="bg-white/80 dark:bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-xs font-medium dark:text-gray-200 border border-white/20">
            {location}
          </p>
        </CardHeader>

        {/* Background Image */}
        <Image
          width={700}
          height={350}
          alt={service_name}
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover transition-transform duration-500 hover:scale-110"
          src={image}
        />

        {/* Dynamic Footer Section */}
        <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/70 dark:bg-slate-900/70 border-t-1 border-white/20 dark:border-white/10 backdrop-blur-lg">
          <div className="space-y-2 w-full">
            <p className="text-lg font-bold text-slate-800 dark:text-white truncate">
              {service_name.split("-").join(" ")}
            </p>
            
            <div className="flex items-center justify-between text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
              <span className="bg-slate-200/50 dark:bg-slate-700/50 px-2 rounded">{category}</span>
              <span className="text-primary-600 dark:text-primary-400 font-bold">$ {service_charge}</span>
            </div>

            <Link 
              href={`/services/${_id}`} 
              className="flex justify-center items-center font-bold w-full py-2 bg-primary text-white rounded-xl hover:opacity-90 transition-opacity"
            >
              Service Details
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ServiceCard