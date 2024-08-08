
const Enroll = () => {
    return (
        <div>
            <div className="text-white enroll pb-2">
                <div className="text-2xl md:text-4xl font-bold text-center pb-8 md:pb-20 pt-10">
                    <p> <span className="text-yellow-500">Who</span> Should Enroll</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
                    <div className="bg-[#131313] mx-4 p-6 md:p-8 rounded-lg max-w-lg">
                        <div className="font-semibold text-xl md:text-2xl pb-2">
                            Aspiring Product Managers
                        </div>
                        <div className="text-base md:pb-8">
                            Individuals looking to break into product management
                        </div>
                    </div>
                    <div className="bg-[#131313] mx-4 p-6 md:p-8 rounded-lg max-w-lg">
                        <div className="font-semibold text-xl md:text-2xl pb-2">
                            Current Product Managers
                        </div>
                        <div className="text-base md:pb-8">
                            Professionals aiming to sharpen their skills and advance their careers
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 pt-16 md:py-8'>
                <hr style={{ borderColor: "#3f3f46" }} className='block md:hidden' />
            </div>
        </div>
    )
}

export default Enroll