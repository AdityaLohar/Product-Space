
const Newsletter = () => {
    return (
        <div>
            <div className="bg-[#070707] text-white border border-1 border-[#323232] p-6 pt-6 md:pt-10 rounded-lg m-3 md:m-20 md:mt-8">
                <div className="pb-10">
                    <div className="text-xl md:text-[41px] pb-3 font-semibold">
                        <p>Subscribe to Newsletter</p>
                    </div>
                    <div className="text-base md:text-lg">
                        <p>Subscribe to our newsletter to stay up-to-date on our latest courses, updates, news and discounts from us.</p>
                    </div>
                </div>

                <div className="flex w-full bg-[#131313] items-center justify-between rounded-lg gap-2">
                    <div className="w-1/2 md:w-3/4">
                        <input type="text" className="focus:outline-none w-full bg-[#131313] p-2 md:p-3 rounded-lg" placeholder="Email Address" />
                    </div>
                    <div className="mr-1 py-1 md:py-2 px-3 text-yellow-500 bg-[#323232] rounded-lg font-semibold">
                        <button>Join Now</button>
                    </div>
                </div>
            </div>
            <div className='px-4 py-16 md:py-8'>
                <hr style={{borderColor: "#3f3f46"}} className='block md:hidden' />
            </div>
        </div>
    )
}

export default Newsletter