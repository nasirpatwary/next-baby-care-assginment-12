"use client"
import {Card, CardHeader, CardFooter} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({service}) => {
    const {image, category, service_name, experience, service_charge, location, _id} = service || {}
  return (
    <div>
        <Card isFooterBlurred className="h-[340px] w-full">
        <CardHeader className="absolute z-10 flex justify-between top-1  items-start">
          <p className="text-tiny bg-primary py-1 px-2 text-white rounded-full uppercase font-semibold">{experience}</p>
          <p className="bg-primary-content px-2 rounded">{location}</p>
        </CardHeader>
        <Image
         width={700}
          height={350}
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={image}
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="space-y-3 w-full">
            <p className="text-xl truncate">{service_name.split("-").join(" ")}</p>
             <div className="flex items-center justify-between">
                 <p>{category}</p>
                 <p>$ {service_charge}</p>
             </div>
          <Link href={`/services/${_id}`} className="font-semibold w-full btn bg-primary">
          Service Details
          </Link>
          </div>
        </CardFooter>
      </Card>
      </div>
  )
}

export default ServiceCard