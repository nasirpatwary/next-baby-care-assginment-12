import { getGingleService } from "@/actions/server/services"
import FormBooking from "@/components/forms/FormBooking"
import Container from "@/components/shared/Container"
import { Rating } from "@smastrom/react-rating"
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
    <Container className="flex flex-col lg:flex-row justify-between gap-6 my-12">
    <div className="flex flex-col space-y-6 flex-1">
        <div className="badge badge-outline badge-primary mb-2">Experience {experience}</div>
        <h1 className="text-2xl lg:text-4xl font-black text-base-content mb-2 leading-tight">
        {caregiver_name}
        </h1>
        <p>{service_name}</p>
        <div className="flex flex-wrap items-center gap-4 mb-6">
        <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
        <span className="text-sm text-base-content/60 font-medium">
            {rating}
        </span>
        <div className="divider divider-horizontal mx-0"></div>
        <span className="text-sm font-semibold">{category} Category</span>
        </div>

        <div className="flex flex-wrap items-center gap-6 mb-6">
        <span className="text-xl ">service_charge: {service_charge}</span>
        <span>hourly_rate: {hourly_rate}</span>
        </div>
          <div className="flex flex-wrap gap-6">
        <p>Availability: {availability}</p>
        <p>Location: {location}</p>
        </div>
        {/* Description */}
        <div className="mb-6 md:mt-8">
        <h3 className="text-lg font-bold mb-2">Description</h3>
        <p className="text-base-content/80 leading-relaxed whitespace-pre-line">
            {description}
        </p>
        </div>
    </div>
    {/* Booking form */}
    <div className="flex-1">
        <FormBooking />
    </div>
    </Container>
  )
}

export default Booking