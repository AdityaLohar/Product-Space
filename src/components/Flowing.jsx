import img1 from '../assets/companies1.svg';

const Flowing = () => {
    return (
        <div>
            <div className='companies-shadow flex relative overflow-hidden'>
                <div className="flex animate-loop-scroll whitespace-nowrap gap-8 items-center">
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                </div>
                <div className="flex animate-loop-scroll whitespace-nowrap gap-8 items-center" aria-hidden="true">
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                    <img src={img1} alt="Image 5" className="max-w-none" />
                </div>
            </div>
        </div>
    )
}

export default Flowing