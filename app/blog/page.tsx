import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import { RefCell } from 'next/dist/build/swc/generated-native';
import Image from 'next/image';
import React from 'react';

const page = () => {
    interface blogType {
        src: string
        alt: string
        category: string
        heading: string
    }
    const blogs: blogType[] = [
        {
            src: '/blog/blog1.png',
            alt: 'blog1',
            category: 'Wood',
            heading: 'Going all-in with millennial design'
        },
        {
            src: '/blog/blog2.png',
            alt: 'blog2',
            category: 'Handmade',
            heading: 'Exploring new ways of decorating'
        },
        {
            src: '/blog/blog3.png',
            alt: 'blog3',
            category: 'Wood',
            heading: 'Handmade pieces that took time to make'
        }
    ]
    const RecentPosts: Omit<blogType, "category">[] = [
        {
            src: '/blog/recentpost1.png',
            alt: 'recent post',
            heading: 'Going all-in with millennial design',
        },
        {
            src: '/blog/recentpost2.png',
            alt: 'recent post',
            heading: 'Exploring new ways of decorating',
        },
        {
            src: '/blog/recentpost3.png',
            alt: 'recent post',
            heading: 'Handmade pieces that took time to make',
        },
        {
            src: '/blog/recentpost4.png',
            alt: 'recent post',
            heading: 'Modern home in Milan',
        },
        {
            src: '/blog/recentpost5.png',
            alt: 'recent post',
            heading: 'Colorful office redesign',
        }
    ]
    return (
        <div>
            <NavBar />
            <Header from='Home' to='Blog' />
            <section className='flex my-11'><div className="w-full md:w-[73vw] p-3 md:p-5">
                {blogs.map((value: blogType, index: number) => (
                    <div key={index} className="mb-8 border-b border-gray-300 pb-5">
                        <div className="relative w-full h-64 md:h-96">
                            <Image
                                className="rounded-2xl"
                                src={value.src}
                                alt={value.alt}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex flex-wrap gap-6 justify-start items-center mt-3 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/blog/admin.png"
                                    alt="By"
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                />
                                Admin
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/blog/time.png"
                                    alt="at"
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                />
                                14 Oct 2024
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/blog/tag.png"
                                    alt="tags"
                                    width={20}
                                    height={20}
                                    className="rounded-full"
                                />
                                {value.category}
                            </div>
                        </div>
                        <h1 className="mt-3 text-2xl font-semibold">{value.heading}</h1>
                        <p className="mt-2 text-gray-700 text-justify leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                        </p>
                    </div>
                ))}
            </div>

                <div className='w-[27vw] m-2 md:m-11'>
                    <div className="relative w-full max-w-md mx-auto">

                        <input
                            type="search"
                            className="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                        />
                        <div
                            className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <Image
                                src="/blog/search.png"
                                alt="Search"
                                className="h-5 w-5"
                                width={2000}
                                height={200}
                                layout='responsive'
                            />
                        </div>
                    </div>
                    <div className='mt-10 mb-20'>
                        <h1 className="mt-3 text-2xl font-semibold ">Categories</h1>

                        <div className='flex justify-between mt-3'>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">Crafts</h1>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">1</h1>
                        </div>

                        <div className='flex justify-between mt-3'>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">Design</h1>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">8</h1>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">Handmade</h1>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">7</h1>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">Interior</h1>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">1</h1>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">Wood</h1>
                            <h1 className="mt-5 text-xl text-[#9F9F9F] ">6</h1>
                        </div>
                    </div>
                    <div>

                        <h1 className="mt-3 text-2xl font-semibold m-5 ">Recent Posts</h1>
                        {
                            RecentPosts.map((value: Omit<blogType, "category">) => (
                                <div className="flex flex-col md:flex-row gap-4 m-5">
                                    <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
                                        <Image
                                            className=" object-contain aspect-square"
                                            src={value.src}
                                            alt={value.alt}
                                            width={80}   
                                            height={80}  
                                        />
                                    </div>
                                    <div className="flex flex-col justify-start w-[65%]">
                                        <h4 className="mt-2 text-justify text-sm md:text-base">
                                            {value.heading}
                                        </h4>
                                        <span className="text-xs md:text-sm">03 Aug 2022</span>
                                    </div>
                                </div>
                            ))
                        }

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
