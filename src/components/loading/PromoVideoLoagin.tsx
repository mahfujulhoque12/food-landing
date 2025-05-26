import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const PromoVideoLoagin = () => {
  return (
     <MaxWidthWrapper>
      <div className="mt-5">
        {/* Skeleton Title */}
        <div className="h-7 w-1/3 bg-gray-300 rounded mb-5 animate-pulse" />

        {/* Skeleton Videos */}
        <div className="space-y-8">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg animate-pulse"
            >
              <div className="aspect-video w-full bg-gray-200 rounded-md" />
            </div>
          ))}
        </div>

        {/* Skeleton Button */}
        <div className="mt-5">
          <div className="w-full h-12 rounded-md bg-gray-300 animate-pulse" />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default PromoVideoLoagin