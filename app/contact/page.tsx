import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <NavBar />
            <Header from='Home' to='Contact' />
            <section className="overflow-x-hidden">
                <h1 className="top-picks text-center mt-[3.4rem] text-2xl sm:text-xl lg:text-3xl">
                    Get In Touch With Us
                </h1>
                <p className="text-center mt-[0.8125rem] break-words h-auto w-full text-[#9F9F9F] text-sm sm:text-base lg:text-lg">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>

                <div className="flex flex-wrap gap-8 justify-around">
                    <div className="w-full sm:w-[48%] md:w-[25%] p-6">
                        <div className="flex items-center justify-start mb-6">
                            <Image
                                className="h-[25px] w-[20px] md:h-[30px] md:w-[27.7px]"
                                alt="location"
                                src="/contact/location.png"
                                width={34441}
                                height={1443}
                            />
                            <div className="ml-3">
                                <h1 className="top-picks text-sm sm:text-base lg:text-2xl">Address</h1>
                                <p className="mt-[0.8125rem] text-[#9F9F9F] text-sm sm:text-base lg:text-lg">
                                    236 5th SE Avenue, New York NY10000, United States
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start mb-6">
                            <Image
                                className="h-[25px] w-[20px] md:h-[30px] md:w-[27.7px]"
                                alt="phone"
                                src="/contact/phone.png"
                                width={34441}
                                height={1443}
                            />
                            <div className="ml-3">
                                <h1 className="top-picks text-sm sm:text-sm lg:text-2xl">Phone</h1>
                                <p className="mt-[0.8125rem] text-[#9F9F9F] text-sm sm:text-base lg:text-lg">
                                    Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-start">
                            <Image
                                className="h-[25px] w-[20px] md:h-[30px] md:w-[27.7px]"
                                alt="clock"
                                src="/contact/clock.png"
                                width={34441}
                                height={1443}
                            />
                            <div className="ml-3">
                                <h1 className="top-picks text-sm sm:text-base lg:text-2xl">Working Time</h1>
                                <p className="mt-[0.8125rem] text-[#9F9F9F] text-sm sm:text-base lg:text-lg">
                                    Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                    </div> 
                    <div className="w-full sm:w-[48%] p-6 ">
                        <p className="mt-[0.8125rem] text-sm sm:text-base lg:text-lg font-semibold">
                            Your name
                        </p>
                        <input
                            type="text"
                            placeholder="Abc"
                            className="w-full p-4 my-4 md:w-[528.75px] border rounded-md"
                        />

                        <p className="mt-[0.8125rem] text-sm sm:text-base lg:text-lg font-semibold">
                            Email address
                        </p>
                        <input
                            type="text"
                            placeholder="Abc@def.com"
                            className="w-full p-4 my-4 md:w-[528.75px] border rounded-md"
                        />

                        <p className="mt-[0.8125rem] text-sm sm:text-base lg:text-lg font-semibold">
                            Subject
                        </p>
                        <input
                            type="text"
                            placeholder="Hi! I’d like to ask about"
                            className="w-full p-4 my-4 md:w-[528.75px] border rounded-md"
                        />

                        <p className="mt-[0.8125rem] text-sm sm:text-base lg:text-lg font-semibold">
                            Your Message
                        </p>
                        <textarea
                            placeholder="Hi! I’d like to ask about"
                            className="w-full p-4 border rounded-md"
                            rows={3}
                        ></textarea>

                        <div className="mt-6 flex items-center gap-4">
                            <div className="border border-black px-10 rounded-xl py-4 font-normal text-[12px] cursor-pointer">
                                Submit
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-wrap bg-[#FAF4F4] justify-around items-center h-auto p-5 px-12 mt-24">
                <div className="text-[1.25rem] p-3 font-normal leading-[1.875rem] flex-1 ">
                    <h1 className="text-[2rem] font-medium leading-[3rem]">Free Delivery</h1>
                    For all orders over $50, consectetur adipim scing elit.
                </div>
                <div className="text-[1.25rem] p-3 font-normal leading-[1.875rem] flex-1 ">
                    <h1 className="text-[2rem] font-medium leading-[3rem]">90 Days Return</h1>
                    If goods have problems, consectetur adipim scing elit.
                </div>
                <div className="text-[1.25rem] p-3 font-normal leading-[1.875rem] flex-1 ">
                    <h1 className="text-[2rem] font-medium leading-[3rem]">Secure Payment</h1>
                    100% secure payment, consectetur adipim scing elit.
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default page;
