import { NextResponse } from 'next/server';
import customer from "/public/logo/man.jpg";

export const GET = async () => {
  const reviews = [
    {
      id: 1,
      name: "Md Mahfuj",
      rating: 5,
      comment: "Outstanding product! I love this Moringa powder. Very helpful and authentic, especially from this shop.",
      img:customer,
      customerType:"Regular Customer",
    },
    {
      id: 2,
      name: "Sharmin Akter",
      rating: 4,
      comment: "Very good quality. Natural and effective. Slightly delayed delivery but worth it.",
          img:customer,
             customerType:"Normal Customer",
    },
    {
      id: 3,
      name: "Rafiul Islam",
      rating: 5,
      comment: "Authentic Moringa powder. I’ve been using it for 2 months now. Highly recommended!",
          img:customer,
             customerType:"Regular Customer",
    },
    {
      id: 4,
      name: "Tasnia Alam",
      rating: 4,
      comment: "Good product, fresh smell and nice packaging. Will order again.",
          // img:customer,
             customerType:"Eregular Customer",
    },
    {
      id: 5,
      name: "Kabir Hossain",
      rating: 5,
      comment: "This powder improved my digestion and energy levels. Very happy with the purchase!",
          img:customer,
             customerType:"Monthly Customer",
    },
  ];

  return NextResponse.json(reviews);
};
