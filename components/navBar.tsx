'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='h-[6.25rem] flex justify-center z-50'>
            <ul className='flex text-sm gap-2 md:text-base md:gap-[4.6rem] m-[2.25rem] w-[26.8rem] h-[1.5rem] text-center z-50 ml-2'>
                <li>
                    <Link href={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={'/store'}>
                        Shop
                    </Link>
                </li>
                <li>
                    About
                </li>
                <li>
                <Link href={'/contact'}>
                        Contact
                    </Link>
                </li>
            </ul>
            <ul className='absolute right-[6vw] hidden xl:flex gap-[2.92rem] h-[1.75rem] w-[15.44rem] m-[2.25rem]'>
                <li>
                    <Link href={'/account'}>
                    <Image className='' src={'/nav/alert.png'} alt={'alert.png'} width={26} height={26} /></Link>
                </li>
                <li>
                    <Image src={'/nav/search.png'} alt={'search.png'} width={26} height={26} />
                </li>
                <li>
                    <Image src={'/nav/heart.png'} alt={'heart.png'} width={26} height={26} />
                </li>
                <li>
                <Link href={'/store'}>
                <Image src={'/nav/shopping-cart.png'} alt={'shopping-cart.png'} width={26} height={26} />
                </Link>
                </li>
            </ul>

            <div className="xl:hidden z-[9999px] flex items-center absolute right-4 top-[2.2rem]" onClick={handleMenuToggle}>
                <Menu size={32} />
            </div>

            {isMenuOpen && (
                <div className="xl:hidden absolute top-[6.25rem] left-0 right-0 bg-white p-4 shadow-lg z-40">
                    <ul className='flex flex-col gap-4'>
                        <li><Link href={'/account'}>Account</Link></li>
                        <li><Link href={'/store'}>Shop</Link></li>
                        <li><Link href={'/'}>favourite</Link></li>
                        <li><Link href={'/cart'}>Cart</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
