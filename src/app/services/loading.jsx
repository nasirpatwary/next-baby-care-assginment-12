import ServiceCardSkeleton from "@/components/skeleton/ServiceCardSkeleton"

const loading = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(12)].map((_, index) => <ServiceCardSkeleton key={index} />)}
    </div>
  )
}

export default loading