const ServiceDetailSkeleton = () => {
  return (
    <div className="rounded-t-3xl shadow-sm border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 mb-16 animate-pulse transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 py-10 px-6">
        
        {/* Left: Image Skeleton */}
        <div className="flex flex-col gap-6">
          {/* Image box with dark mode color */}
          <div className="w-full h-[400px] bg-gray-200 dark:bg-slate-800 rounded-2xl"></div>
          
          <div className="flex flex-wrap justify-between bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl">
            <div className="h-5 w-32 bg-gray-200 dark:bg-slate-700 rounded"></div>
            <div className="h-5 w-32 bg-gray-200 dark:bg-slate-700 rounded"></div>
          </div>
        </div>

        {/* Right: Info Skeleton */}
        <div className="flex flex-col space-y-6">
          {/* Badge Skeleton */}
          <div className="h-8 w-32 bg-primary/10 dark:bg-primary/20 rounded-full mb-2"></div>
          
          {/* Title & Subtitle */}
          <div className="space-y-4">
             <div className="h-12 w-3/4 bg-gray-200 dark:bg-slate-800 rounded-lg"></div>
             <div className="h-6 w-1/2 bg-gray-200 dark:bg-slate-800 rounded-md"></div>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-4 py-4 border-y border-gray-100 dark:border-slate-800">
            <div className="h-6 w-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
            <div className="h-6 w-10 bg-gray-200 dark:bg-slate-800 rounded"></div>
            <div className="divider divider-horizontal hidden sm:flex"></div>
            <div className="h-6 w-28 bg-gray-200 dark:bg-slate-800 rounded"></div>
          </div>

          {/* Pricing Grid Skeleton */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="h-20 w-full bg-gray-100 dark:bg-slate-800 rounded-2xl"></div>
            <div className="h-20 w-full bg-gray-100 dark:bg-slate-800 rounded-2xl"></div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-4">
            <div className="h-6 w-28 bg-gray-200 dark:bg-slate-800 rounded"></div>
            <div className="space-y-2">
                <div className="h-4 w-full bg-gray-100 dark:bg-slate-800/60 rounded"></div>
                <div className="h-4 w-full bg-gray-100 dark:bg-slate-800/60 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-100 dark:bg-slate-800/60 rounded"></div>
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="h-14 w-full bg-primary/20 dark:bg-primary/30 rounded-xl mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailSkeleton;