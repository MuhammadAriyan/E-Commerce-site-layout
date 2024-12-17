'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import NavBar from '@/components/navBar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [addToCart, setAddToCart] = useState(false)
    const showCart = () => setAddToCart(!addToCart)
    return (
        <div className={`${addToCart ? "bg-gray-100" : ''} overflow-x-hidden`}>
            <NavBar />
            <div className='flex gap-4 my-2 ml-10 p-2 items-center'>
                <span className='text-[10px] text-gray-400'>Home</span>
                <Image src="/store/arrow.png" className='h-[10px] brightness-50 w-[8.5px]' alt="arrow.png" width={14000} height={1400} />
                <span className='text-[10px] text-gray-400'>Shop</span>
                <Image src="/store/arrow.png" className='h-[10px] brightness-50 w-[8.5px]' alt="arrow.png" width={500} height={1000} />
                <span className='border h-[27px] border-gray-400'></span>
                <span className='text-[10px] px-3'>Asgard Sofa</span>
            </div>


            <div>
                {
                    addToCart &&
                    <div className='absolute top-1 z-50 right-1 p-4 w-[90%] sm:w-[417px] h-[90vh] overflow-y-auto bg-white shadow-lg rounded-xl'>
                        <div className='flex justify-between items-center w-full'>
                            <h1 className='text-[24px] font-semibold'>Shopping Cart</h1>
                            <Image
                                src={'/singleproduct/cancelshop.png'}
                                alt='cancelshop'
                                onClick={showCart}
                                width={16.8}
                                height={19}
                                className='cursor-pointer'
                            />
                        </div>
                        <hr className='w-[80%] mx-auto my-2' />
                        <div className='flex justify-between items-center m-4'>
                            <Image
                                className='w-[105px] h-[105px] bg-[#FFF9E5] rounded-xl'
                                src={'/singleproduct/sofa5.png'}
                                alt='asgard sofa'
                                width={105}
                                height={105}
                            />
                            <div className='flex flex-col items-start justify-between'>
                                <h1 className='text-[1rem] font-normal'>Asgaard sofa</h1>
                                <div className='flex justify-between gap-1 w-full'>
                                    <span className='font-light text-[16px]'>1</span>
                                    <span className='font-light text-[14px]'>X</span>
                                    <span className='text-[#B88E2F] text-[12px] font-medium'>Rs. 250,000.00</span>
                                </div>
                            </div>
                            <Image
                                src={'/singleproduct/cancel.png'}   alt='cancel'
                                width={16.8}
                                height={19} className='cursor-pointer'
                            />
                        </div>

                        <div className='absolute bottom-6 left-4 w-full'>
                            <div className='flex justify-between items-center mb-4'>
                                <div className='font-normal text-[12px] text-gray-600'>Subtotal</div>
                                <div className='font-normal text-[#B88E2F] text-[12px]'>Rs. 250,000.00</div>
                            </div>
                            <hr className='my-4' />
                            <div className='flex justify-between items-center'>
                                <Link href={'/cart'} className='mx-[36px] my-[7px] rounded-xl border border-black px-4 py-2 font-normal text-[12px] text-center'>
                                    View Cart
                                </Link>
                                <Link href={'/checkout'} className='mx-[36px] my-[7px] rounded-xl border border-black px-4 py-2 font-normal text-[12px] text-center'>
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>

                }
            </div>



            <section className='justify-around block 2xl:flex mt-3'>
                <div className="flex flex-col xl:flex-row gap-5 items-center xl:items-start justify-center">
                    <div className="flex flex-wrap justify-between gap-3 xl:flex-col">
                        {
                            ['sofa1.png', 'sofa2.png', 'sofa3.png', 'sofa4.png'].map((img: string, index: number) => (
                                <div
                                    key={index}
                                    className="h-[76px] w-[76px] bg-[#FFF9E5] flex justify-center items-center rounded-xl"
                                >
                                    <Image
                                        className="object-cover"
                                        src={`/singleproduct/${img}`}
                                        alt={`sofa-sidebar-${index + 1}`}
                                        width={76}
                                        height={76}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="w-fit xl:w-[481px] h-[300px] xl:h-[500px] bg-[#FFF9E5] rounded-xl">
                        <Image
                            className="w-full h-full object-cover rounded-xl"
                            src={'/singleproduct/sofa5.png'}
                            alt="asgaard ka sofa"
                            width={481}
                            height={500}
                        />
                    </div>
                </div>

                <div className="w-full h-auto grid p-2 lg:w-[720px] lg:h-[820px]">
                    <h1 className="text-[42px] pb-4">Asgaard sofa</h1>
                    <span className="text-[24px] py-4 text-[#9F9F9F]">Rs. 250,000.00</span>
                    <div className="flex py-2 items-center">
                        <Image src={'/singleproduct/stars.png'} alt='reviews' height={1} width={124} />
                        <span className="border-[0.5px] mx-5 h-8 border-[#9F9F9F]"></span>
                        <p className="text-[13px] text-[#9F9F9F] font-light">5 Customer Review</p>
                    </div>
                    <div className='w-[80%] text-sm'>
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                    </div>
                    <div className='text-[#9F9F9F] font-light py-4'>
                        Size
                    </div>
                    <div className='flex gap-4 w-fit text-center'>
                        <div className='w-[30px] h-[30px] text-[4px] font-light pt-1 bg-[#FBEBB5] rounded-lg'>L</div>
                        <div className='w-[30px] h-[30px] text-[4px] font-light pt-1 rounded-lg bg-[#FAF4F4]'>XL</div>
                        <div className='w-[30px] h-[30px] text-[4px] font-light pt-1 rounded-lg bg-[#FAF4F4]'>XS</div>
                    </div>
                    <div className='text-[#9F9F9F] py-3'>
                        Color
                    </div>
                    <div className=' flex py-3 gap-3'>
                        <div className='size-[30px] rounded-full bg-[#816DFA]'></div>
                        <div className='size-[30px] rounded-full bg-[#000000]'></div>
                        <div className='size-[30px] rounded-full bg-[#CDBA7B]'></div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-start gap-5 pt-4'>

                        <div className='h-[64px]  font-normal rounded-lg border-[1px] flex justify-around items-center border-[#9F9F9F] w-[123px]'>
                            <span className='text-base text-black'>-</span>
                            <span className='text-base text-black'>1</span>
                            <span className='text-base text-black'>+</span>
                        </div>
                        <div onClick={showCart} className='h-[64px] rounded-lg border-black border-[2px] flex justify-around items-center  w-[217px]'>
                            <button className='text-base text-black'>Add To Cart</button>
                        </div>
                    </div>
                    <hr className='py-3' />
                    <div className='flex gap-4'>
                        <div className='grid'>
                            <span className='text-base text-[#9F9F9F] py-1.5'>SKU</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>Category</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>Tags</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>Shares</span>
                        </div>
                        <div className='grid'>
                            <span className='text-base text-[#9F9F9F] py-1.5'>:</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>:</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>:</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>:</span>
                        </div>
                        <div className='grid'>
                            <span className='text-base text-[#9F9F9F] py-1.5'>SS001</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>Sofa</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>Sofa, Chair, Home, Shop</span>
                            <span className='text-base text-[#9F9F9F] py-1.5'>
                                <div className="flex justify-between">
                                    <div className="flex gap-5 sm:gap-7 items-center">
                                        <Image src={'/singleproduct/fb.png'} alt='fb' width={16.8} height={16.8} className='w-[16.8px] h-[16.8px]' />
                                        <Image src={'/singleproduct/linkedIn.png'} alt='linkedIn' width={16.8} height={16.8} className='w-[16.8px] h-[16.8px]' />
                                        <Image src={'/singleproduct/bird.png'} alt='chiria' width={16.8} height={16.8} className='w-[16.8px] h-[16.8px]' />

                                    </div>
                                    <Image src={'/singleproduct/heart.png'} alt='muhabat ka chalawa' width={18.8} height={18.8} />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

            </section>
            <section className=' mt-10'>
                <div className='flex justify-evenly m-[24px] mb-20 flex-wrap'>
                    <h1 className='text-2xl mb-4 md:mb-0'>Description</h1>
                    <h1 className='text-[#9F9F9F] text-2xl mb-4 md:mb-0'>Additional Information</h1>
                    <h1 className='text-[#9F9F9F] text-2xl mb-4 md:mb-0'>Reviews [5]</h1>
                </div>

                <div className='text-[#9F9F9F] mx-4 my-2 md:mx-24'>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </div>

                <div className='text-[#9F9F9F] mx-4 my-2 md:mx-24'>
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </div>

                <div className="w-full h-auto mt-12 flex flex-col md:flex-row justify-evenly">
                    <Image className='w-full md:w-[40%] h-auto rounded-xl bg-[#FFF9E5] mb-4 md:mb-0' src={'/singleproduct/bigsofa1.png'} alt='big sofa1' width={700} height={700} />
                    <Image className='w-full md:w-[40%] h-auto rounded-xl bg-[#FFF9E5]' src={'/singleproduct/bigsofa2.png'} alt='big sofa2' width={1200} height={1200} />
                </div>
            </section>

            <section className='h-auto p-4 md:p-8'>

                <h1 className='top-picks text-center mt-[3.4rem] text-2xl md:text-3xl font-semibold'>Related Products</h1>

                <p className='text-center mt-[0.8125rem] h-[1.5rem] w-full text-[#9F9F9F] text-sm md:text-base'>
                    Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
                </p>

                <div className="flex flex-wrap mt-[4.0625rem] justify-center md:justify-evenly gap-4">

                    <div className="w-full max-w-[17.9375rem] h-[23.25rem] mb-4">
                        <Image className='aspect-[1/1]' src={'/home/Trenton-modular-sofa_3-1.png'} alt='Trenton-modular-sofa_3-1.png' objectFit='contain' layout='responsive' width={1} height={1} />
                        <div className='w-[12.4375rem] h-[6rem] mt-[0.875rem] mx-auto'>
                            <h1 className='text-lg font-medium'>Trenton modularsofa_3</h1>
                            <span>Rs. 25,000.00</span>
                        </div>
                    </div>

                    <div className="w-full max-w-[17.9375rem] h-[23.25rem] mb-4">
                        <Image className='aspect-[1/1]' src={'/home/Granite-dining-table-with-dining-chair-1.png'} alt='Granite-dining-table-with-dining-chair-1.png' objectFit='contain' layout='responsive' width={1} height={1} />
                        <div className='w-[12.4375rem] h-[6rem] mt-[0.875rem] mx-auto'>
                            <h1 className='text-lg font-medium'>Granite dining table with dining chair</h1>
                            <span>Rs. 25,000.00</span>
                        </div>
                    </div>

                    <div className="w-full max-w-[17.9375rem] h-[23.25rem] mb-4">
                        <Image className='aspect-[1/1]' src={'/home/Outdoor-bar-table-and-stool-1.png'} alt='Outdoor-bar-table-and-stool-1.png' objectFit='contain' layout='responsive' width={1} height={1} />
                        <div className='w-[12.4375rem] h-[6rem] mt-[0.875rem] mx-auto'>
                            <h1 className='text-lg font-medium'>Outdoor bar table and stool</h1>
                            <span>Rs. 25,000.00</span>
                        </div>
                    </div>

                    <div className="w-full max-w-[17.9375rem] h-[23.25rem] mb-4">
                        <Image className='aspect-[1/1]' src={'/home/Plain-console-with-teak-mirror-1.png'} alt='Plain-console-with-teak-mirror-1.png' objectFit='contain' layout='responsive' width={1} height={1} />
                        <div className='w-[12.4375rem] h-[6rem] mt-[0.875rem] mx-auto'>
                            <h1 className='text-lg font-medium'>Plain console with teak mirror</h1>
                            <span>Rs. 25,000.00</span>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <p className="text-[1.25rem] pb-[1.1875rem] border-b-2 w-fit border-black font-medium leading-[1.875rem] text-center mt-[4.3125rem] mb-[3.1875rem] hover:text-gray-700 transition-colors">
                        View More
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page