import Image from 'next/image';
import React from 'react';
const Header = ({from,to}:{from:string,to:string}) => {
    return (
        <div>
            <section className="h-[19.75rem] bg-[url('/store/rectangle-1.png')] bg-cover flex justify-center items-center">
                <div className="flex flex-col justify-center items-center w-full px-4 sm:px-8 md:px-16">
                    <Image src="/store/Meubel House_Logos-05.png" alt="Meubel House_Logos-05" width={77} height={77} />

                    <h1 className="text-[3rem] sm:text-[2.5rem] md:text-[3.5rem] relative -top-5 font-medium leading-[4.5rem] sm:leading-[3rem] md:leading-[4.5rem] flex items-center text-center">
                        {to}
                    </h1>

                    <div className="flex items-center gap-2 relative -top-4">
                        <span className="text-[1rem] sm:text-[0.875rem] font-medium leading-[1.5rem] text-left">{from}</span>
                        <Image src="/store/arrow.png" alt="arrow.png" width={8} height={14} />
                        <span className="text-[1rem] sm:text-[0.875rem] font-medium leading-[1.5rem] text-left">{to}</span>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Header;
