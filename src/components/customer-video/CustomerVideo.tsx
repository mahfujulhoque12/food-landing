"use client";
import React, { useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetCustomerVideoQuery } from "@/redux/features/api/customerVideo";

const CustomerVideo: React.FC = () => {
  const { data: videoData = [], isLoading } = useGetCustomerVideoQuery();
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleIndices((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      videoRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [videoData]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="mt-5">
      <MaxWidthWrapper>
        <h2 className="text-gray-700 text-2xl font-bold text-center pb-5">
          What Say Our Customer
        </h2>
        <div className="relative">
          <Carousel className="gap-4">
            <CarouselContent className="gap-5">
              {videoData.map(({ url }, index) => {
                const autoplayUrl = url.includes("?")
                  ? `${url}&autoplay=1&mute=1`
                  : `${url}?autoplay=1&mute=1`;

                return (
                  <CarouselItem
                    key={index}
                    data-index={index}
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="z-10 border border-gray-200 rounded-lg duration-300 mb-2"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-md">
                      <iframe
                        className="w-full h-full"
                        src={visibleIndices.includes(index) ? autoplayUrl : url}
                        title={`Customer Video ${index + 1}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media; clipboard-write; fullscreen"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-white hover:bg-[#D84040] hover:text-white border-gray-200" />
            <CarouselNext className="hover:bg-[#D84040] hover:text-white border-gray-200 bg-white" />
          </Carousel>
        </div>

        <div className="mt-5">
          <Link
            href="#order"
            className="relative overflow-hidden text-xl font-bold text-white bg-[var(--btn-bg)] px-6 py-3 rounded-md w-full block text-center group"
          >
            <span className="relative z-10">Order Now</span>
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default CustomerVideo;
