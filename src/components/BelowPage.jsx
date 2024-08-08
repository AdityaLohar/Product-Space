import placed from '../assets/already-placed.png';
import packageImage from '../assets/package.png';
import increment from '../assets/increment.png';
import certificate from '../assets/certificate-vector.png';

const BelowPage = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 text-white gap-4 justify-around pb-16 md:pb-0 px-6 lg:px-28 text-lg md:text-xl'>
                <div className='flex items-center gap-2 md:justify-center'>
                    <div className='w-10'>
                        <img src={placed} alt="" className='w-8 h-6' />
                    </div>
                    <div>
                        <div className='text-yellow-500'>2000+ Members</div>
                        <div>ALREADY PLACED</div>
                    </div>
                </div>
                <div className='flex items-center gap-2 md:justify-center'>
                    <div className='w-10'>
                        <img src={packageImage} alt="" className='w-4 h-6' />
                    </div>
                    <div>
                        <div className='text-yellow-500'>46.7 LPA</div>
                        <div>HIGHEST PACKAGE</div>
                    </div>
                </div>
                <div className='flex items-center gap-2 md:justify-center'>
                    <div className='w-10'>
                        <img src={increment} alt="" className='w-8 h-6' />
                    </div>
                    <div>
                        <div className='text-yellow-500'>4.5x Increment</div>
                        <div>AVERAGE CTC</div>
                    </div>
                </div>
                <div className='flex items-center gap-2 md:justify-center'>
                    <div className='w-10'>
                        <img src={certificate} alt="" className='w-8 h-8' />
                    </div>
                    <div>
                        <div className='text-yellow-500'>70% Certificate</div>
                        <div>COMPLETION</div>
                    </div>
                </div>
            </div>

            <div className='px-4 pb-16 md:py-8'>
                <hr style={{ borderColor: "#3f3f46" }} className='block md:hidden' />
            </div>
        </div>
    )
}

export default BelowPage