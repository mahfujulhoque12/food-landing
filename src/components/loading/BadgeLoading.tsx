import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const BadgeLoading = () => {
  return (
       <MaxWidthWrapper>
       <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-5">
        {/* Skeleton for Image (left column) */}
       <div>
         <div className="w-full h-[150px] bg-gray-200 animate-pulse rounded-md" />
       </div>
         <div>
         <div className="w-full h-[150px] bg-gray-200 animate-pulse rounded-md" />
       </div>
         <div>
         <div className="w-full h-[150px] bg-gray-200 animate-pulse rounded-md" />
       </div>
         <div>
         <div className="w-full h-[150px] bg-gray-200 animate-pulse rounded-md" />
       </div>

        {/* Skeleton for Form or Details (right column) */}
    
      </div>
    </MaxWidthWrapper>
  )
}

export default BadgeLoading