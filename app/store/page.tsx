import Footer from '@/components/footer'
import Header from '@/components/header'
import NavBar from '@/components/navBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const products = [
    {
      id: 1,
      src: '/home/Trenton-modular-sofa_3-1.png',
      alt: 'Trenton modular sofa',
      title: 'Trenton modular sofa',
      price: 'Rs. 25,000.00',
    },
    {
      id: 2,
      src: '/home/Granite-dining-table-with-dining-chair-1.png',
      alt: 'Granite dining table with dining chair',
      title: 'Granite dining table with dining chair',
      price: 'Rs. 25,000.00',
    },
    {
      id: 3,
      src: '/home/Outdoor-bar-table-and-stool-1.png',
      alt: 'Outdoor bar table and stool',
      title: 'Outdoor bar table and stool',
      price: 'Rs. 25,000.00',
    },
    {
      id: 4,
      src: '/home/Plain-console-with-teak-mirror-1.png',
      alt: 'Plain console with teak mirror',
      title: 'Plain console with teak mirror',
      price: 'Rs. 25,000.00',
    },
    {
      id: 5,
      src: '/store/Grain-coffee-table-1.png',
      alt: 'Grain coffee table',
      title: 'Grain coffee table',
      price: 'Rs. 15,000.00',
    },
    {
      id: 6,
      src: '/store/Kent-coffee-table-1.png',
      alt: 'Kent coffee table',
      title: 'Kent coffee table',
      price: 'Rs. 225,000.00',
    },
    {
      id: 7,
      src: '/store/Round-coffee-table_color-2-1.png',
      alt: 'Round coffee table color 2',
      title: 'Round coffee table color 2',
      price: 'Rs. 251,000.00',
    },
    {
      id: 8,
      src: '/store/Reclaimedcoffeetable.png',
      alt: 'Reclaimed teak coffee table',
      title: 'Reclaimed teak coffee table',
      price: 'Rs. 25,200.00',
    },
    {
      id: 9,
      src: '/store/Plain-console_1.png',
      alt: 'Plain console',
      title: 'Plain console',
      price: 'Rs. 258,200.00',
    },
    {
      id: 10,
      src: '/store/Reclaimed-teak-Sideboard-1.png',
      alt: 'Reclaimed teak Sideboard',
      title: 'Reclaimed teak Sideboard',
      price: 'Rs. 20,000.00',
    },
    {
      id: 11,
      src: '/store/SJP_0825-1.png',
      alt: 'SJP_0825',
      title: 'SJP_0825',
      price: 'Rs. 200,000.00',
    },
    {
      id: 12,
      src: '/store/Bella-chair-and-table-1.png',
      alt: 'Bella chair and table',
      title: 'Bella chair and table',
      price: 'Rs. 100,000.00',
    },
    {
      id: 13,
      src: '/home/Granite-square-side-table-1.png',
      alt: 'Granite square side table',
      title: 'Granite square side table',
      price: 'Rs. 258,800.00',
    },
    {
      id: 14,
      src: '/store/Asgaard sofa 2.png',
      alt: 'Asgaard sofa',
      title: 'Asgaard sofa',
      price: 'Rs. 250,000.00',
      link: '/singleproduct',
    },
    {
      id: 15,
      src: '/store/Maya-sofa-three-seater-1.png',
      alt: 'Maya sofa three seater',
      title: 'Maya sofa three seater',
      price: 'Rs. 115,000.00',
    },
    {
      id: 16,
      src: '/store/Outdoor-sofa-set-1.png',
      alt: 'Outdoor sofa set',
      title: 'Outdoor sofa set',
      price: 'Rs. 244,000.00',
    },
  ];

  return (
    <div className=' overflow-hidden'>
      <NavBar />

      <Header from='Home' to='Shop' />
      <section className="bg-[#FAF4F4] mt-12 flex flex-wrap items-center justify-between px-4 md:px-10 lg:px-20 py-4 gap-6">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              className="w-6 h-6 aspect-square"
              src={'/store/system-uicons_filtering.png'}
              alt="system-uicons_filtering"
              width={24}
              height={24}
            />
            <p>Filter</p>
            <Image
              className="w-5 h-5 aspect-square"
              src={'/store/4dot.png'}
              alt="4dot"
              width={20}
              height={20}
            />
            <Image
              className="w-5 h-5 aspect-square"
              src={'/store/bi_view-list.png'}
              alt="bi_view-list"
              width={18}
              height={18}
            />
          </div>
          <span className="hidden md:block h-10 border-l border-[#9F9F9F]"></span>
          <div className="text-sm">Showing 1–16 of 32 results</div>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-4">
            <p>Show</p>
            <input
              className="w-16 h-10 text-center border border-gray-300 rounded-md"
              type="number"
              placeholder="16"
            />
          </div>
          <div className="flex items-center gap-4">
            <p>Sort By</p>
            <input
              className="w-28 h-10 text-center border border-gray-300 rounded-md"
              type="search"
              placeholder="Default"
            />
          </div>
        </div>
      </section>

      <section className="h-fit w-full flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              {product.link ? (
                <Link href={product.link} className="block">
                  <Image
                    className="aspect-[1/1] flex self-center mr-5 h-full mx-16 md:m-6"
                    src={product.src}
                    alt={product.alt}
                    objectFit="contain"
                    layout="responsive"
                    width={3434341}
                    height={3444}
                  />
                </Link>
              ) : (
                <Image
                  className="aspect-[1/1]"
                  src={product.src}
                  alt={product.alt}
                  objectFit="contain"
                  layout="responsive"
                  width={133300000000}
                  height={13330303}
                />
              )}
              <div className="text-center mt-4">
                <h1 className="text-lg font-medium">{product.title}</h1>
                <span className="text-gray-600">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='h-[7.31rem] gap-8 flex justify-center items-end'>
        <div className='px-[0.987rem] py-[0.5rem]  rounded-md bg-[#FBEBB5] font-normal'>1</div>
        <div className='px-[0.987rem] py-[0.5rem]  rounded-md bg-[#FFF9E5] font-normal'>2</div>
        <div className='px-[0.987rem] py-[0.5rem]  rounded-md bg-[#FFF9E5] font-light'>3</div>
        <div className='px-[0.987rem] py-[0.5rem]  rounded-md bg-[#FFF9E5] font-light'>Next</div>
      </section>
      <section className="flex flex-wrap bg-[#FAF4F4] justify-around items-center h-[18.75rem] px-12 mt-24">
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
  )
}

export default page