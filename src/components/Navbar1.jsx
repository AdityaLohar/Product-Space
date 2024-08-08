import { RiArrowRightSFill } from "react-icons/ri";

const Navbar1 = () => {
    return (
        <div className="text-white py-2 font-semibold items-center text-center"
            style={{
            background: 'linear-gradient(to right, black 10%, #342D1E 20%, #342D1E 80%, black 90%)'
          }}>
            <div className="container mx-auto flex items-center justify-center text-yellow-500 gap-1 lg:gap-2 text-[10px] md:text-[16px] ">
                <div>
                    NEXT COHORT STARTS: 22ND JUNE
                </div>
                <div className="flex items-center">
                    <div className='bg-[#130D00] px-2 rounded-sm md:rounded-md'>
                        25 DAYS TO GO
                    </div>
                    <div>
                        <RiArrowRightSFill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar1;