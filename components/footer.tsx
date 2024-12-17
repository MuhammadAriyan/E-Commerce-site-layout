import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="w-full max-w-[90rem] h-auto px-[5%] pt-[5.75rem] pb-[2rem]">
                <div className='flex flex-wrap justify-between w-full max-w-[70.6875rem] h-full'>
                    <div className='flex items-center h-full w-full sm:w-[17.8125rem]'>
                        <div className="text-[1rem] h-[16.5rem] text-[#9F9F9F] font-normal leading-[1.5rem] text-left">
                            400 University Drive Suite 200 Coral Gables,
                            <p className="text-[1rem] text-[#9F9F9F] font-normal leading-[1.5rem] text-left">
                                FL 33134 USA
                            </p>
                        </div>
                    </div>
                    <div className='text-[1rem] font-medium leading-[1.5rem] text-left w-full sm:w-auto'>
                        <h1 className='text-[#9F9F9F] pb-[2.875rem]'>Links</h1>
                        <ul>
                            <li className='pb-[2.875rem]'>Home</li>
                            <li className='pb-[2.875rem]'>Shop</li>
                            <li className='pb-[2.875rem]'>About</li>
                            <li className='pb-[2.875rem]'>Contact</li>
                        </ul>
                    </div>
                    <div className='text-[1rem] font-medium leading-[1.5rem] text-left w-full sm:w-auto'>
                        <h1 className='text-[#9F9F9F] pb-[2.875rem]'>Help</h1>
                        <ul>
                            <li className='pb-[2.875rem]'>Payment Options</li>
                            <li className='pb-[2.875rem]'>Returns</li>
                            <li className='pb-[2.875rem]'>Privacy Policies</li>
                        </ul>
                    </div>
                    <div className='w-full sm:w-auto'>
                        <h1 className='text-[#9F9F9F] text-[1rem] font-medium leading-[1.5rem] pb-[2.875rem] text-left'>Newsletter</h1>
                        <div className='flex flex-col sm:flex-row gap-2'>
                            <input className='border-b-[1px] border-black p-[1px]' type="email" placeholder='Enter Your Email Address' />
                            <button className='border-b-[1px] border-black p-[1px]'>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="text-[1rem] font-normal leading-[1.6rem] text-left flex justify-center sm:justify-start">
                <div className='p-7'>
                    2022 Meubel House. All rights reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
