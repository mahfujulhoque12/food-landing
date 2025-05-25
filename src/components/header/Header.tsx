import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
// import logo1 from '/public/logo/logo1.jpg';npx shadcn@latest add carousel

import logo2 from '/public/logo/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SiShopify } from 'react-icons/si';
import { HiMenuAlt1 } from 'react-icons/hi';


const Header = () => {
  return (
    <div className='bg-gradient-to-l from-[var(--gradient-from)] to-[var(--gradient-to)] '>

    <MaxWidthWrapper>

        <div className='flex justify-between gap-3 items-center   h-20'>
          
   
            <div className=''> 
                <button className='text-[#D84040] cursor-pointer'><HiMenuAlt1    size={40} /></button>
          
            </div>

            <Link href="#" className='flex items-center gap-2'>
                <Image src={logo2} width={100} height={100} alt='logo' className='w-[100px] h-[80px]'/>
           
            </Link>
       
            <div className='relative'> 
                <Link href="/card" className='text-[#D84040] cursor-pointer'><SiShopify  size={40} /></Link>
                <span className='text-xs font-normal bg-[#D84040] text-white p-0.5 rounded-full absolute -top-2 -right-1'>02</span>
            </div>

        </div>
    </MaxWidthWrapper>
    </div>
  )
}

export default Header