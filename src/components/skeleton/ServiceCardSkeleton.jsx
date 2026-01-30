const ServiceCardSkeleton = () => {
  return (
    <div className="max-w-md bg-white/80 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 rounded-2xl p-6 animate-pulse transition-colors duration-300">
      
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar Skeleton */}
          <div className="h-12 w-12 bg-gray-300 dark:bg-slate-700 rounded-full"></div>
          
          <div className="space-y-2">
            {/* Name and Role Skeletons */}
            <div className="h-3 w-24 bg-gray-300 dark:bg-slate-700 rounded"></div>
            <div className="h-2 w-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
          </div>
        </div>
        {/* Date/Badge Skeleton */}
        <div className="h-2 w-16 bg-gray-200 dark:bg-slate-800 rounded"></div>
      </div>

      {/* Text/Content Skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-3 w-full bg-gray-200 dark:bg-slate-800 rounded"></div>
        <div className="h-3 w-full bg-gray-200 dark:bg-slate-800 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-200 dark:bg-slate-800 rounded"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-slate-800">
        <div className="h-5 w-20 bg-gray-300 dark:bg-slate-700 rounded-lg"></div>
        <div className="h-4 w-12 bg-gray-300 dark:bg-slate-700 rounded"></div>
      </div>
    </div>
  );
};

export default ServiceCardSkeleton;