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
    <div className="rounded-3xl shadow-sm border border-base-200 bg-base-100">
      <Container className="grid lg:grid-cols-2 gap-12 py-12">
        
        {/* Left: Image Section */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded">
            <Image
              width={800}
              height={400}
              src={image} 
              alt={caregiver_name} 
              className="object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <p>Availability: {availability}</p>
            <p>Location: {location}</p>
          </div>
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col space-y-6">
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
         {/* Description */}
          <div className="mb-6 md:mt-8 lg:mt-12">
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <p className="text-base-content/80 leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
            <Link href={`/booking/${_id}`} className="btn btn-primary">Book Service</Link>
        </div>
      </Container>
    </div>
  )
}

export default DetailsCard