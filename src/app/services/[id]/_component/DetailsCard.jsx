import Container from "@/components/shared/Container";
import { Rating } from "@smastrom/react-rating"
import Image from "next/image"
import Link from "next/link";

const DetailsCard = ({service}) => {
  const {
    caregiver_name,
    service_name,
    category,
    experience,
    rating,
    service_charge,
    hourly_rate,
    location,
    availability,
    image,
    description,
    _id
  } = service || {}
  return (
   <div className="rounded-t-3xl shadow-sm border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300">
  <Container className="grid lg:grid-cols-2 gap-12 py-12">
    
    {/* Left: Image Section */}
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-slate-800">
        <Image
          width={800}
          height={400}
          src={image} 
          alt={caregiver_name} 
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="flex flex-wrap justify-between text-sm font-medium text-gray-600 dark:text-slate-400 bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl">
        <p className="flex items-center gap-2">
          <span className="text-primary">●</span> Availability: {availability}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-primary">●</span> Location: {location}
        </p>
      </div>
    </div>

    {/* Right: Info Section */}
    <div className="flex flex-col space-y-6">
      <div>
        <div className="badge badge-outline badge-primary mb-4 px-4 py-3 font-semibold">
          Experience: {experience}
        </div>
        <h1 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
          {caregiver_name}
        </h1>
        <p className="text-xl text-primary font-medium">{service_name}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-100 dark:border-slate-800">
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        <span className="text-sm text-gray-500 dark:text-slate-400 font-bold">
          {rating} / 5.0
        </span>
        <div className="divider divider-horizontal mx-0 hidden sm:flex"></div>
        <span className="text-sm font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">
          {category} Category
        </span>
      </div>

      {/* Pricing Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-transparent dark:border-slate-700">
          <p className="text-xs text-gray-500 uppercase font-bold mb-1">Service Charge</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">${service_charge}</p>
        </div>
        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-transparent dark:border-slate-700">
          <p className="text-xs text-gray-500 uppercase font-bold mb-1">Hourly Rate</p>
          <p className="text-2xl font-black text-slate-900 dark:text-white">${hourly_rate}</p>
        </div>
      </div>

      {/* Description */}
      <div className="md:mt-4">
        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Description</h3>
        <p className="text-gray-700 dark:text-slate-400 leading-relaxed whitespace-pre-line text-base">
          {description}
        </p>
      </div>

      <Link 
        href={`/booking/${_id}`} 
        className="btn btn-primary btn-lg w-full md:w-max px-12 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
      >
        Book Service Now
      </Link>
    </div>
  </Container>
</div>
  )
}

export default DetailsCard