'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';
type PaymentMethod = 'bkash' | 'nogod' | 'rocket';

type FormValues = {
  billing: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  shipping: {
    name: string;
    phone: string;
    address: string;
  };
 paymentMethod: PaymentMethod;
};



const Checkout: React.FC = () => {

const paymentMethods: { id: PaymentMethod; label: string; logo: string }[] = [
  { id: 'bkash', label: 'Bkash', logo: '/logo/bkash.png' },
  { id: 'nogod', label: 'Nagad', logo: '/logo/nagad.png' },
  { id: 'rocket', label: 'Rocket', logo: '/logo/rocket.png' },
];


const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const [sameAsBilling, setSameAsBilling] = useState(false);

  const billing = watch('billing');

  useEffect(() => {
    if (sameAsBilling) {
      setValue('shipping.name', billing.name);
      setValue('shipping.phone', billing.phone);
      setValue('shipping.address', billing.address);
    }
  }, [sameAsBilling, billing, setValue]);

  const onSubmit = (data: FormValues) => {
    console.log('✅ Submitted data:', data);
  };

  const inputStyles =
    'border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <MaxWidthWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 py-10">
        {/* Billing Details */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white">
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="Full Name"
                {...register('billing.name', { required: 'Name is required' })}
                className={inputStyles}
              />
              {errors.billing?.name && (
                <p className="text-red-500 text-sm mt-1">{errors.billing.name.message}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Email"
                {...register('billing.email', { required: 'Email is required' })}
                className={inputStyles}
              />
              {errors.billing?.email && (
                <p className="text-red-500 text-sm mt-1">{errors.billing.email.message}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Phone"
                {...register('billing.phone', { required: 'Phone is required' })}
                className={inputStyles}
              />
              {errors.billing?.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.billing.phone.message}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Billing Address"
                {...register('billing.address', { required: 'Address is required' })}
                className={inputStyles}
              />
              {errors.billing?.address && (
                <p className="text-red-500 text-sm mt-1">{errors.billing.address.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Shipping Details */}
        <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Shipping Details</h2>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={sameAsBilling}
                onChange={() => setSameAsBilling((prev) => !prev)}
              />
              Same as billing
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="Recipient Name"
                {...register('shipping.name', { required: 'Name is required' })}
                className={inputStyles}
                disabled={sameAsBilling}
              />
              {errors.shipping?.name && (
                <p className="text-red-500 text-sm mt-1">{errors.shipping.name.message}</p>
              )}
            </div>
            <div>
              <input
                placeholder="Phone"
                {...register('shipping.phone', { required: 'Phone is required' })}
                className={inputStyles}
                disabled={sameAsBilling}
              />
              {errors.shipping?.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.shipping.phone.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <input
                placeholder="Shipping Address"
                {...register('shipping.address', { required: 'Address is required' })}
                className={inputStyles}
                disabled={sameAsBilling}
              />
              {errors.shipping?.address && (
                <p className="text-red-500 text-sm mt-1">{errors.shipping.address.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Payment Method */}
 <div className="border border-gray-300 p-6 rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

      <div className="flex flex-col gap-4">
        {paymentMethods.map((method) => {
          const isActive = selectedMethod === method.id;

          return (
            <div
              key={method.id}
              onClick={() => {
                setSelectedMethod(method.id);
                setValue('paymentMethod', method.id, { shouldValidate: true });
              }}
              className={`flex items-center justify-between px-4 py-3 rounded-lg border cursor-pointer transition duration-200 ${
                isActive
                  ? 'border-green-500 ring-2 ring-green-200'
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <div className="flex items-center gap-0">
                <Image
                  src={method.logo}
                  alt={method.label}
                  width={80}
                  height={50}
                  className="object-contain h-10 w-20"
                />
                <span className="text-base font-medium text-gray-700">
                  {method.label}
                </span>
              </div>

                <FaCheck className={`${isActive ? "text-green-500" :"text-gray-400"} `} />
          
            </div>
          );
        })}
      </div>

      {/* Hidden input for RHF */}
      <input
        type="hidden"
        {...register('paymentMethod', {
          required: 'Select a payment method',
        })}
      />

      {errors.paymentMethod && (
        <p className="text-red-500 text-sm mt-2">{errors.paymentMethod.message}</p>
      )}
    </div>

        <button
          type="submit"
          className="relative overflow-hidden text-xl font-bold text-white bg-[var(--btn-bg)] px-6 py-3 rounded-md w-full block text-center group"
        >
          <span className="relative z-10">Order Now</span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </form>
    </MaxWidthWrapper>
  );
};

export default Checkout;
