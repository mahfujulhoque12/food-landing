"use client";

import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { FaStar } from "react-icons/fa6";
import { useGetReviewQuery } from "@/redux/features/api/reviewApi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const CustomerReview = () => {
  const { data: reviews = [], isLoading } = useGetReviewQuery();

  if (isLoading) return <p>Loading…</p>;

  return (
    <MaxWidthWrapper>
      <h2 className="text-2xl font-bold text-center my-5 text-gray-800">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 relative">
        <Carousel>
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id}>
                <div className=" rounded-md border border-gray-100">
                  <div className="px-4 pt-4">
                    {/* Name style */}
                    <div className="flex items-center gap-3">
                      {review.img ?    <Image
                        src={review.img}
                        width={100}
                        height={100}
                        alt="img"
                        className="rounded-full h-20 w-20 object-cover"
                      /> :     <FaUserCircle size={50} color="#D84040"/>}
                  
                   
                  
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 mt-2">
                          {review.name}
                        </h3>
                        <p className="text-sm font-normal text-gray-600">
                      {review.customerType}
                        </p>
                      </div>
                    </div>
                    {/* Name style end */}

                    {/* arrow style */}
                    <div className="flex items-center relative">
                      <p className="h-[2px] w-[70%] bg-[#D84040] mt-3"></p>
                      <p className="text-[#D84040] absolute right-[26%] top-1 ">
                        <RiArrowRightDoubleFill size={18} />
                      </p>
                    </div>
                    {/* arrow style end*/}

                    {/* Comment */}
                    <p className="text-sm font-normal text-gray-600 mt-2">
                      {review.comment}
                    </p>
                    {/* Comment end */}
                  </div>
                  {/* Star rating */}
                  <div className="mt-3 bg-[#D84040]/10 p-4">
                    <p className="text-[#D84040] flex gap-1">
                      {Array.from({ length: review.rating }, (_, i) => (
                        <FaStar key={i} size={20} />
                      ))}
                    </p>
                  </div>
                  {/* Star end */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-[#D84040] hover:text-white border-gray-200"/>
          <CarouselNext  className="hover:bg-[#D84040] hover:text-white border-gray-200"/>
        </Carousel>
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomerReview;
