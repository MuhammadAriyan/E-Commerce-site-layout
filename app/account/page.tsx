import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <NavBar />
            <Header from='Home' to='My Account' />
            <main className='flex flex-wrap justify-around'>
                <div className='w-full sm:w-[608px] mt-6 h-[630px] grid justify-around items-center'>
                    <h1 className="text-3xl font-semibold leading-[54px]">Log In</h1>

                    <span className="pt-[36px]">Username or email address</span>
                    <input className="mt-[22px] mb-11 h-[81px] w-full sm:w-[423px] border rounded-md border-[#9F9F9F]"
                        type="email"
                        name="" id=""
                    />

                    <span className="pt-[36px]">Password</span>
                    <input
                        className="mt-[22px] mb-11 h-[81px] w-full sm:w-[423px] border rounded-md border-[#9F9F9F]" type="password" name="" id=""
                    />

                    <div className="flex items-center">
                        <input className='size-[32px]' type="checkbox" name="" id="" />
                        <span className="ml-2 font-normal">Remember me</span>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <div className="border border-black px-10 rounded-xl py-2 font-normal text-[12px] cursor-pointer">
                            Login
                        </div>
                        <span className="text-[#9F9F9F] text-base font-light">Lost Your Password?</span>
                    </div>

                </div>

                <div className='w-full sm:w-[608px] mt-6 h-[630px] grid justify-around items-center'>
                    <h1 className="text-3xl font-semibold leading-[54px]">Register</h1>

                    <span className="pt-[36px]">Email address</span>
                    <input
                        className="mt-[22px] mb-11 h-[81px] w-full sm:w-[423px] border rounded-md border-[#9F9F9F]"
                        type="email"
                        name=""
                        id=""
                    />
                    <span className="ml-2 text-xl font-normal">A link to set a new password will be sent to your email address.</span>
                    <span className="ml-2 text-xl font-normal">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold text-xl'>privacy policy</span>.</span>

                    <div className="mt-6 flex items-center gap-4">
                        <div className="border border-black px-10 rounded-xl py-2 font-normal text-[12px] cursor-pointer">
                            Register
                        </div>
                    </div>

                </div>
            </main>


            <section className="flex flex-wrap bg-[#FAF4F4] justify-around items-center h-auto p-5 px-12 mt-24">
                <div className="text-[1.25rem] font-normal leading-[1.875rem] flex-1 ">
                    <h1 className="text-[2rem] font-medium leading-[3rem]">Free Delivery</h1>
                    For all orders over $50, consectetur adipim scing elit.
                </div>
                <div className="text-[1.25rem] font-normal leading-[1.875rem] flex-1 ">
                    <h1 className="text-[2rem] font-medium leading-[3rem]">90 Days Return</h1>
                    If goods have problems, consectetur adipim scing elit.
                </div>
                <div className="text-[1.25rem] font-normal leading-[1.875rem] flex-1 ">
                    <h1 className="text-[2rem] font-medium leading-[3rem]">Secure Payment</h1>
                    100% secure payment, consectetur adipim scing elit.
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default page;
