import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import React from 'react';

const Page = () => {
    return (
        <div>
            <NavBar />
            <Header from='Home' to='Cart' />
            <div className="container mx-auto px-4 mt-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="w-full md:w-2/3">
                        <div className="flex xl:flex-col p-6 rounded-lg mb-6">
                            <div className="flex flex-col  bg-[#FFF9E5] p-2 xl:p-4 rounded-sm xl:flex-row justify-between mb-4 text-sm sm:text-base lg:text-base font-semibold">
                                <p>Product</p>
                                <p>Price</p>
                                <p>Quantity</p>
                                <p>Subtotal</p>
                            </div>

                            <div className="flex flex-col xl:flex-row justify-between items-center mb-6">
                                <div className="flex items-center">
                                    <img
                                        src="/store/Asgaard sofa 2.png"
                                        alt="Asgard Sofa - A luxurious seating option."
                                        className="w-20 h-20 mr-4 p-2 bg-[#FBEBB5] rounded-lg"
                                    />
                                    <span className="text-gray-600 text-sm sm:text-base lg:text-lg">Asgard Sofa</span>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base lg:text-base">Rs. 250,000.00</p>
                                <input
                                    type="number"
                                    placeholder="1"
                                    className="w-16 p-2 border rounded-lg text-center"
                                />
                                <p className="text-gray-600 text-sm sm:text-base lg:text-base">Rs. 250,000.00</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mt-8 md:mt-0">
                        <div className="bg-[#FFF9E5] p-8 rounded-lg">
                            <h2 className="text-xl font-bold mb-6">Cart Totals</h2>
                            <div className="flex justify-between mb-4 text-gray-600 text-sm sm:text-base lg:text-base">
                                <p>Subtotal:</p>
                                <p>Rs. 250,000.00</p>
                            </div>
                            <div className="flex justify-between mb-6 text-gray-600 text-sm sm:text-base lg:text-base">
                                <p>Total:</p>
                                <p>Rs. 250,000.00</p>
                            </div>
                            <button className="w-full flex justify-center font-bold py-3 rounded-lg transition duration-300">
                                <div className="w-[60%] border p-3 rounded-xl border-black hover:text-white hover:bg-black">Check Out</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <section className="flex flex-col md:flex-row bg-[#FAF4F4] p-10 justify-around items-center gap-8 mt-16">
                <div className="text-center md:text-left max-w-xs">
                    <h1 className="text-xl font-medium leading-tight mb-2">Free Delivery</h1>
                    <p className="text-gray-600">
                        For all orders over $50, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="text-center md:text-left max-w-xs">
                    <h1 className="text-xl font-medium leading-tight mb-2">90 Days Return</h1>
                    <p className="text-gray-600">
                        If goods have problems, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="text-center md:text-left max-w-xs">
                    <h1 className="text-xl font-medium leading-tight mb-2">Secure Payment</h1>
                    <p className="text-gray-600">
                        100% secure payment, consectetur adipiscing elit.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Page;
