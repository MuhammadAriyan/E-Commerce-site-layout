import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import React from 'react';

const page = () => {
    return (
        <div>
            <NavBar />
            <section className="min-h-scree p-2 lg:p-12">
                <div className="container mx-auto bg-white shadow-md rounded-lg p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Billing Details</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="First Name" className="w-full p-4 border rounded-md" />
                                    <input type="text" placeholder="Last Name" className="w-full p-4 border rounded-md" />
                                </div>

                                <input type="text" placeholder="Company Name (Optional)" className="w-full p-4 border rounded-md" />

                                <select className="w-full p-4 border rounded-md">
                                    <option value="Sri Lanka">Sri Lanka</option>
                                </select>

                                <input type="text" placeholder="Street Address" className="w-full p-4 border rounded-md" />

                                <input type="text" placeholder="Town / City" className="w-full p-4 border rounded-md" />

                                <select className="w-full p-4 border rounded-md">
                                    <option value="Western Province">Western Province</option>
                                </select>

                                <input type="text" placeholder="ZIP Code" className="w-full p-4 border rounded-md" />

                                <input type="text" placeholder="Phone" className="w-full p-4 border rounded-md" />

                                <input type="email" placeholder="Email Address" className="w-full p-4 border rounded-md" />
                                <textarea
                                    placeholder="Additional Information"
                                    className="w-full p-4 border rounded-md"
                                    rows={1}
                                ></textarea>
                            </form>
                        </div>
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between mb-6 lg:mb-8">
                                <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-0">Product</h2>
                                <h2 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-0">Subtotal</h2>
                            </div>
                            <div className="p-6 lg:p-8 rounded-md space-y-4 lg:space-y-6">
                                <div className="flex flex-row justify-between mb-4">
                                    <span className=" text-xs lg:text-2xl md:text-sm text-gray-400">Asgard Sofa <span className="text-black  text-xs lg:text-2xl md:text-sm"> x 1</span></span>
                                    <span className=' text-xs lg:text-2xl md:text-sm'>Rs. 250,000.00</span>
                                </div>
                                <div className="flex flex-row justify-between mb-4">
                                    <span className=' text-xs lg:text-2xl md:text-sm'>Subtotal</span>
                                    <span className=' text-xs lg:text-2xl md:text-sm'>Rs. 250,000.00</span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between mb-4">
                                    <span className='lg:text-3xl text-base md:text-2xl'>Total</span>
                                    <span className="font-bold lg:text-3xl text-base md:text-2xl text-[#B88E2F]">Rs. 250,000.00</span>
                                </div>

                                <div>
                                    <div className="space-y-4 lg:space-y-6">
                                        <label className="flex items-center">
                                            <input type="radio" name="payment" className="mr-3 bg-gray-400" defaultChecked />
                                            <div>Direct Bank Transfer</div>
                                        </label>
                                        <div className="text-gray-400 font-light text-sm mb-3">
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                                        </div>
                                        <label className="flex items-center">
                                            <input type="radio" name="payment" className="mr-3 bg-gray-400" />
                                            <div className="text-gray-400">Direct Bank Transfer</div>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="radio" name="payment" className="mr-3 text-gray-400" />
                                            <div className="text-gray-400">Cash on Delivery</div>
                                        </label>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-600 mt-4 lg:mt-6">
                                    Your personal data will be used to support your experience throughout this website, to manage access to
                                    your account, and for other purposes described in our <a href="#" className="font-semibold">privacy policy</a>.
                                </p>
                                <div className="flex justify-center w-full mt-6 lg:mt-8">
                                    <button className="text-center w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] border border-black px-8 py-3 rounded-lg hover:text-white hover:bg-black">
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='md:flex wrap bg-[#FAF4F4] p-2 justify-around items-center h-auto md:h-[18.75rem] gap-4 px-12 mt-24'>
                <div className="text-[1.25rem] font-normal leading-[1.875rem]"
                >
                    <h1 className="text-[2rem] font-medium leading-[3rem]"
                    >Free Delivery</h1>
                    For all oders over $50, consectetur adipim scing elit.
                </div>
                <div className="text-[1.25rem] font-normal leading-[1.875rem]"
                >
                    <h1 className="text-[2rem] font-medium leading-[3rem]"
                    >90 Days Return</h1>
                    If goods have problems, consectetur adipim scing elit.
                </div>
                <div className="text-[1.25rem] font-normal leading-[1.875rem]"
                >
                    <h1 className="text-[2rem] font-medium leading-[3rem]"
                    >Secure Payment</h1>
                    100% secure payment, consectetur adipim scing elit.
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default page;

