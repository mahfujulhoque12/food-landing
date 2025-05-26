import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'

const HeroLoadin = () => {
  return (
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
          {/* Skeleton for Image */}
          <div>
            <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-md" />
          </div>
    
       
        </div>
   
      </MaxWidthWrapper>
  )
}

export default HeroLoadin