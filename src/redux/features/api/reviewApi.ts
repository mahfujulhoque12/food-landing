import { StaticImageData } from "next/image";
import { apiSlice } from "./apiSlice";

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  img:string | StaticImageData,
  customerType:string;

}

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReview: builder.query<Review[], void>({
      query: () => `/api/review`,
      
    
    }),
  }),
});

export const { useGetReviewQuery } = reviewApi;
