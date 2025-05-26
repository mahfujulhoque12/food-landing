import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const SpecificationLoading = () => {
  return (
    <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {/* Skeleton Image */}
          <div>
            <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-md" />
          </div>

          {/* Skeleton Text */}
          <div className="space-y-4">
            <div className="h-6 w-2/3 bg-gray-300 rounded animate-pulse" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Skeleton Button */}
        <div className="mt-5">
          <div className="w-full h-12 rounded-md bg-gray-300 animate-pulse" />
        </div>
      </MaxWidthWrapper>
  )
}

export default SpecificationLoading