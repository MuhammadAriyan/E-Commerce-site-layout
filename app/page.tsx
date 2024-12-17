import Footer from '@/components/footer'
import NavBar from '@/components/navBar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='h-auto'>
      <div className="bg-[#FBEBB5] ">
        <NavBar />
      </div>
      <section className="bg-[#FBEBB5] w-full h-auto py-16 px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
          <div className="text-center lg:text-left max-w-md">
            <h1 className="text-3xl font-semibold heroTitle mb-4">Rocket Single Seater</h1>
            <button className="inline-block py-2 px-4 bg-transparent border-b-2 border-black text-lg">
              Shop Now
            </button>
          </div>
          <div className="max-w-2xl">
            <Image
              className="-z-1" src={'/home/Rocket-single-seater-1.png'} alt="Rocket Single Seater"
              width={1200} height={1300}
              priority
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row md:justify-around md:items-center bg-[#FAF4F4] w-full h-[auto] md:h-[50rem] p-4">

        <div className="w-full md:w-[37.8rem] h-[35.125rem] mb-4 md:mb-0">
          <Image
            className="aspect-ratio-fix"
            src={'/home/Granite-square-side-table-1.png'}
            alt='Granite-square-side-table-1'
            objectFit='contain'
            layout='responsive'
            width={10}
            height={10}
          />
          <div className="relative bottom-10">
            <h1 className="mb-4 text-xl md:text-2xl font-semibold">Side table</h1>
            <span className="pb-2 border-b-2 border-black cursor-pointer">View More</span>
          </div>
        </div>

        <div className="w-full md:w-[37.8rem] h-[35.125rem]">
          <Image
            className="aspect-ratio-fix"
            src={'/home/Cloud-sofa-three-seeter.png'}
            alt='cloud-sofa-three-seeter.png'
            objectFit='contain'
            layout='responsive'
            width={10}
            height={10}
          />
          <div className="relative bottom-10">
            <h1 className="mb-4 text-xl md:text-2xl font-semibold">Cloud Sofa</h1>
            <span className="pb-2 border-b-2 border-black cursor-pointer">View More</span>
          </div>
        </div>

      </section>

      <section className='h-auto p-4 md:p-8'>

        <h1 className='top-picks text-center mt-[3.4rem] text-2xl md:text-3xl font-semibold'>Top Picks For You</h1>

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

      <section className="w-full h-auto bg-[#FFF9E5] lg:flex md:flex-row justify-between items-center ">

        <div className="md:w-[50%]">
          <Image
            className="w-full h-auto"
            src={'/home/Asgaard-sofa-1.png'}
            alt="Asgaard-sofa-1"
            width={983}
            height={799}
          />
        </div>

        <div className="text-center md:text-left md:w-[50%] flex flex-col items-center md:items-start mt-6 md:mt-0 md:ml-6">
          <p className="text-[1.5rem] font-medium leading-[2.25rem]">
            New Arrivals
          </p>
          <p className="text-[3rem] font-bold leading-[4.5rem]">
            Asgaard sofa
          </p>
          <div className="flex justify-center md:justify-start items-center w-full mt-[2.0625rem] h-[4rem]">
            <Link
              className="border-[1px] mb-10 flex justify-center items-center border-black w-[15.9rem] h-full text-center text-[1.25rem] font-normal leading-[1.875rem]"
              href={'/singleproduct'}
            >
              Order Now
            </Link>
          </div>
        </div>

      </section>
      <section className='w-full h-auto'>
        <h1 className='top-picks text-center mt-[3.4rem]'>Our Blogs</h1>
        <p className='text-center mt-[0.8125rem] h-[1.5rem] w-full text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection</p>

        <div className="h-auto mt-[4rem] gap-7 flex flex-wrap justify-center">
          <div className='w-full sm:w-[24.5rem] h-full'>
            <Image className='aspect-ratio-fix' src={'/home/Rectangle-13.png'} alt='Rectangle-13.png' objectFit='contain' layout='responsive' width={10} height={10} />
            <div className="text-center text-[20px] mt-[2.0625rem] font-normal leading-[30px]">
              Going all-in with millennial design
            </div>
            <div className='flex justify-center'>
              <Link href={'/blogs'} className="w-fit p-3 text-[24px] font-medium leading-[36px] text-center border-black border-b-2">
                Read More
              </Link>
            </div>
            <div className="w-full gap-5 mt-[1.1875rem] h-auto flex justify-center">
              <div className='flex gap-2'>
                <Image className="w-[1.15rem] h-[1.14rem]" src={'/home/clock.png'} alt='clock' width={18} height={18} />
                <p className='text-[16px] font-light leading-[24px]'>5 min</p>
              </div>

              <div className='flex gap-2'>
                <Image className="w-[1.15rem] h-[1.14rem]" src={'/home/uil_calender.png'} alt='uil_calender' width={18} height={18} />
                <p className='text-[16px] font-light leading-[24px]'>
                  12 <sup className='text-[0.03px] align-super'>th</sup> Oct 2022
                </p>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-[24.5rem] h-full'>
            <Image className='aspect-ratio-fix' src={'/home/Rectangle-14.png'} alt='Rectangle-14.png' objectFit='contain' layout='responsive' width={10} height={10} />
            <div className="text-center text-[20px] mt-[2.0625rem] font-normal leading-[30px]">
              Going all-in with millennial design
            </div>
            <div className='flex justify-center'>
              <Link href={'/blogs'} className="w-fit p-3 text-[24px] font-medium leading-[36px] text-center border-black border-b-2">
                Read More
              </Link>
            </div>
            <div className="w-full gap-5 mt-[1.1875rem] h-auto flex justify-center">
              <div className='flex gap-2'>
                <Image className="w-[1.15rem] h-[1.14rem]" src={'/home/clock.png'} alt='clock' width={18} height={18} />
                <p className='text-[16px] font-light leading-[24px]'>5 min</p>
              </div>

              <div className='flex gap-2'>
                <Image className="w-[1.15rem] h-[1.14rem]" src={'/home/uil_calender.png'} alt='uil_calender' width={18} height={18} />
                <p className='text-[16px] font-light leading-[24px]'>
                  12 <sup className='text-[0.03px] align-super'>th</sup> Oct 2022
                </p>
              </div>
            </div>
          </div>

          <div className='w-full sm:w-[24.5rem] h-full'>
            <Image className='aspect-ratio-fix' src={'/home/Rectangle-15.png'} alt='Rectangle-15.png' objectFit='contain' layout='responsive' width={10} height={10} />
            <div className="text-center text-[20px] mt-[2.0625rem] font-normal leading-[30px]">
              Going all-in with millennial design
            </div>
            <div className='flex justify-center'>
              <Link href={'/blogs'} className="w-fit p-3 text-[24px] font-medium leading-[36px] text-center border-black border-b-2">
                Read More
              </Link>
            </div>
            <div className="w-full gap-5 mt-[1.1875rem] h-auto flex justify-center">
              <div className='flex gap-2'>
                <Image className="w-[1.15rem] h-[1.14rem]" src={'/home/clock.png'} alt='clock' width={18} height={18} />
                <p className='text-[16px] font-light leading-[24px]'>5 min</p>
              </div>

              <div className='flex gap-2'>
                <Image className="w-[1.15rem] h-[1.14rem]" src={'/home/uil_calender.png'} alt='uil_calender' width={18} height={18} />
                <p className='text-[16px] font-light leading-[24px]'>
                  12 <sup className='text-[0.03px] align-super'>th</sup> Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center relative'>
          <p className="text-[1.25rem] mt-[4.62rem] pb-[1.1875rem] border-b-2 w-fit border-black font-medium leading-[1.875rem] text-center mb-[3.1875rem]">
            View All Post
          </p>
        </div>
      </section>
      <section className="h-[400px] mt-[3.375rem] flex justify-center items-center w-full bg-[url('/home/Rectangle-17.png')] bg-cover bg-center">
        <div className='text-center px-4'>
          <h1 className="text-[60px] sm:text-[40px] w-full font-bold leading-[90px] sm:leading-[50px]">Our Instagram</h1>
          <span className="text-[20px] sm:text-[16px] w-full font-normal leading-[30px] sm:leading-[24px]">Follow our store on Instagram</span>
          <div className='flex justify-center mt-5'>
            <Link className='bg-[#FAF4F4] w-fit rounded-full py-[1.0625rem] px-[5.0625rem] shadow-[0px_20px_20px_0px_#0000001A] text-center' href={'/'}>
              Follow Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default page
