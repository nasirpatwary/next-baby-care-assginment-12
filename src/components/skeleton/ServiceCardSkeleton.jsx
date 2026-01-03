
const ServiceCardSkeleton = () => {
  return (
     <div className="max-w-md bg-white/80 border border-gray-300 rounded-2xl p-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-3 w-24 bg-gray-300 rounded"></div>
            <div className="h-2 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="h-2 w-16 bg-gray-200 rounded"></div>
      </div>
      {/* Text Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between pt-4 border-t border-gray-50">
        <div className="h-5 w-20 bg-gray-300 rounded"></div>
        <div className="h-4 w-12 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;