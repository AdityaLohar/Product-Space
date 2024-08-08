import { GoArrowRight } from "react-icons/go";

const WantoToKnow = () => {
    return (
        <div>
            <div className="text-white flex flex-col justify-center items-center min-h-[50vh] px-4">
                <div className="pb-8">
                    <div className="hidden md:block text-xl md:text-3xl md:text-[41px] font-bold text-center pt-10 pb-2">
                        <p>Want to know if PM is the right fit <span className="text-yellow-500">for you</span>?</p>
                    </div>
                    <div className="md:hidden text-xl md:text-3xl md:text-[41px] font-bold text-center pt-10 pb-2">
                        <p>Want to know <br /> if PM is the right fit <span className="text-yellow-500">for you</span>?</p>
                    </div>
                    <div className="text-center text-sm md:text-lg">
                        <p>Unlock Your Potential with Expert-Led Learning and Community Support.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 text-lg font-semibold">
                    <button className="hidden md:block border border-1 border-yellow-500 p-3 px-6 rounded-full text-yellow-500">
                        Meet 1:1 with Mentors
                    </button>
                    <button className="hidden md:flex bg-yellow-500 p-3 px-6 rounded-full flex items-center justify-center gap-1 text-black hover:bg-yellow-600">
                        Connect with students <GoArrowRight />
                    </button>
                    <button className="flex md:hidden text-sm font-bold bg-yellow-500 p-3 flex items-center justify-center gap-1 px-6 rounded-full text-black hover:bg-yellow-600">
                        Connect 1:1 with Mentors <GoArrowRight />
                    </button>
                </div>
            </div>

            <div className='px-4 pb-16 pt-8 md:py-8'>
                <hr style={{ borderColor: "#3f3f46" }} className='block md:hidden' />
            </div>
        </div>
    )
}

export default WantoToKnow