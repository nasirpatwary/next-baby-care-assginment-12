const ServiceDetailSkeleton = () => {
  return (
    <div className="rounded-3xl shadow-sm border border-base-200 bg-base-100 mb-16 animate-pulse">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 py-6 px-4">
        
        {/* Left: Image Skeleton */}
        <div className="flex flex-col gap-4">
          <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
          <div className="flex flex-wrap justify-between">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Right: Info Skeleton */}
        <div className="flex flex-col space-y-6">
          <div className="h-6 w-24 bg-primary/20 rounded-full mb-2"></div>
          
          <div className="space-y-3">
             <div className="h-10 w-3/4 bg-gray-200 rounded"></div>
             <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-5 w-32 bg-gray-200 rounded"></div>
            <div className="h-5 w-8 bg-gray-200 rounded"></div>
            <div className="h-5 w-24 bg-gray-200 rounded"></div>
          </div>

          <div className="flex gap-6 mb-6">
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
            <div className="h-8 w-32 bg-gray-200 rounded"></div>
          </div>

          {/* Description Skeleton */}
          <div className="mb-6 md:mt-8 lg:mt-12">
            <div className="h-6 w-28 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2">
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
            </div>
          </div>

          <div className="h-12 w-full bg-primary/30 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailSkeleton;