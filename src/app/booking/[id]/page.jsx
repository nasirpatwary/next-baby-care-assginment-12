import { getGingleService } from "@/actions/server/services"
import FormBooking from "@/components/forms/FormBooking"
import Container from "@/components/shared/Container"
import { Rating } from "@smastrom/react-rating"
export const metadata = {
  title: "booking",
  description: "professional care at home in Bangladesh. Reliable, 24/7 patient support"
}
const Booking = async ({params}) => {
  const {id} = await params
  const service = await getGingleService(id)
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
    description,
  } = service || {}
  return (
   <Container className="flex flex-col lg:flex-row justify-between gap-10 my-12 transition-colors duration-300">
  {/* Left Side: Service Information */}
  <div className="flex flex-col space-y-6 flex-1">
    <div>
      <div className="badge badge-outline badge-primary mb-4 font-semibold px-4 py-3">
        Experience: {experience}
      </div>
      
      <h1 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
        {caregiver_name}
      </h1>
      
      <p className="text-xl font-medium text-primary dark:text-blue-400">
        {service_name}
      </p>
    </div>

    {/* Rating & Category Section */}
    <div className="flex flex-wrap items-center gap-4 py-4 border-y border-gray-100 dark:border-slate-800">
      <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
      <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
        {rating} / 5.0
      </span>
      <div className="divider divider-horizontal mx-0 hidden sm:flex"></div>
      <span className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-300">
        {category} Category
      </span>
    </div>

    {/* Pricing & Logistics Info Card */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white dark:bg-slate-900/50 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
      <div className="space-y-1">
        <p className="text-sm text-gray-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Service Charge</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">${service_charge}</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Hourly Rate</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">${hourly_rate}/hr</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Availability</p>
        <p className="text-lg font-medium text-slate-800 dark:text-slate-200">{availability}</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Location</p>
        <p className="text-lg font-medium text-slate-800 dark:text-slate-200">{location}</p>
      </div>
    </div>

    {/* Description Section */}
    <div className="mb-6 md:mt-8">
      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white border-l-4 border-primary pl-4">
        Description
      </h3>
      <p className="text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-lg bg-gray-50 dark:bg-slate-800/30 p-4 rounded-xl">
        {description}
      </p>
    </div>
  </div>

  {/* Right Side: Booking Form */}
  <div className="flex-1 lg:max-w-md">
    <div className="sticky top-24 p-1 rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent dark:from-blue-500/10 shadow-2xl">
      <FormBooking {...service} />
    </div>
  </div>
</Container>
  )
}

export default Booking