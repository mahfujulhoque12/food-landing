'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { useGetCardsQuery } from '@/redux/features/api/cardApi';
import Link from 'next/link';

const Card: React.FC = () => {
  const { data: cards = [], isLoading } = useGetCardsQuery();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  if (isLoading) return <p>Loading...</p>;

  // Calculate subtotal
  const subtotal = cards.reduce((sum, card) => {
    const qty = quantities[card.id] || 0;
    const base = card.basePrice || 0;
    return sum + base * qty;
  }, 0);

  const taxRate = 0.1; // 10%
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleQuantity = (id: number, action: 'inc' | 'dec') => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const updated = action === 'inc' ? current + 1 : Math.max(current - 1, 0);
      return { ...prev, [id]: updated };
    });
  };

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-6">
        <h3 className='text-center text-2xl font-bold text-gray-700 mt-3'>Product List</h3>
        {cards.map((card) => {
          const qty = quantities[card.id] || 0;
          const price = (card.basePrice || 0) * qty;

          return (
            <div
              key={card.id}
              className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 bg-white shadow-sm"
            >
              {/* Product Image */}
              <div className="relative w-24 h-24 rounded overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{card.name}</h2>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => handleQuantity(card.id, 'dec')}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    −
                  </button>
                  <span className="text-gray-700">{qty}</span>
                  <button
                    onClick={() => handleQuantity(card.id, 'inc')}
                    className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-base text-gray-700 font-medium">
                  ${price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}

        {/* Summary Section */}
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between text-gray-700 text-base mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 text-base mb-2">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

           <div className="mt-5">
                  <Link
                    href="#"
                    className="relative overflow-hidden text-xl font-bold text-white bg-[var(--btn-bg)] px-6 py-3 rounded-md w-full block text-center group"
                  >
                    <span className="relative z-10">Checkout</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </Link>
                </div>
                
           <div className="">
                  <Link
                    href="/"
                    className="relative overflow-hidden text-xl font-bold text-white bg-[var(--btn-bg)] px-6 py-3 rounded-md w-full block text-center group"
                  >
                    <span className="relative z-10">Go Home</span>
                    <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </Link>
                </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Card;
