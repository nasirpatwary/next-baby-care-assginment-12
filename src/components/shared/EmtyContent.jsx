import Link from "next/link"
const EmtyContent = () => {
  return (
   <div className="flex flex-col items-center justify-center space-y-4 min-h-[calc(100vh-292px)]">
      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-default-700">No Bookings Available</h3>
        <p className="text-default-500">
          It looks like you haven&apos;t made any bookings yet. Start exploring our services!
        </p>
      </div>
      <Link 
        href="/services" 
        className="btn btn-sm btn-primary"
      >
        Book a Service
      </Link>
    </div>
  )
}

export default EmtyContent