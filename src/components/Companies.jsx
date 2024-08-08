import Flowing from './Flowing';
import Flowing2 from './Flowing2';
import Flowing3 from './Flowing3';

const Companies = () => {
    return (
        <div>
            <div className="text-white text-2xl text-center md:text-4xl font-bold mx-6 md:mx-32 pb-16">
                <div className="flex justify-center pb-14 md:py-28">
                    <p>
                        Trusted by <span className='text-yellow-500'> 500+ </span> Product companies in India
                    </p>
                </div>
                <div className='space-y-10 box-shadow-2'>
                    <Flowing />
                    <Flowing2 />
                    <Flowing3 />
                    <div className='hidden md:block space-y-10'>
                        <Flowing2 />
                        <Flowing />
                    </div>
                </div>
            </div>

            <div className='px-4 pb-8 md:py-8'>
                <hr style={{ borderColor: "#3f3f46" }} className='block md:hidden' />
            </div>
        </div>
    )
}

export default Companies