import { useState } from "react";
import arrow from "../assets/arrow_byju_head.svg";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full flex flex-col items-center lg:grid grid-cols-1 lg:grid-cols-10 gap-2 p-6 rounded-lg shadow-lg mx-auto bg-transparent">
                        <div className='col-span-1'></div>
                        <div className="flex flex-col items-center mb-4 text-center col-span-1 lg:col-span-2">
                            <img src={slide.image} alt={slide.name} className="h-12 w-12 md:h-48 md:w-48 border border-1-white rounded-full" />
                            <div>
                                <p className="font-semibold pt-4">{slide.name}</p>
                            </div>
                        </div>
                        <div className='col-span-1 lg:col-span-4 flex flex-col justify-center h-full'>
                            <p className="text-xl lg:text-2xl mb-4 font-semibold">
                                <q>{slide.title}</q>
                            </p>
                            <p className="hidden lg:block mb-4 text-sm">
                                {slide.desc}
                            </p>
                        </div>
                        <div className='relative col-span-1 lg:col-span-2 p-3'>
                            <img src={arrow} alt="Arrow" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 pt-10 lg:py-4 flex justify-center gap-3 w-full">
                {slides.map((_, i) => (
                    <div
                        onClick={() => setCurrent(i)}
                        key={i}
                        className={`rounded-full w-2 h-2 cursor-pointer ${i === current ? "bg-white" : "bg-gray-500"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
