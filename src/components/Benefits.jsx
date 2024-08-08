import Card from "./Card";
import img1 from "../assets/benefits1.png";
import img2 from "../assets/benefits2.png";
import img3 from "../assets/benefits3.png";
import img4 from "../assets/benefits4.png";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const items = [
    {
        title1: "1:1",
        title2: "Mentorship",
        img: img1
    },
    {
        title1: "Live",
        title2: "Sessions",
        img: img2
    },
    {
        title1: "Industry",
        title2: "Aligned",
        img: img3
    },
    {
        title1: "Interview",
        title2: "Focused",
        img: img4
    },
];

const Benefits = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollTop, clientHeight } = containerRef.current;
                const sections = Array.from(containerRef.current.querySelectorAll('.section'));
                let newIndex = 0;

                sections.forEach((section, index) => {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollTop + clientHeight / 2 >= offsetTop && scrollTop + clientHeight / 2 < offsetTop + offsetHeight) {
                        newIndex = index;
                    }
                });

                setActiveIndex(newIndex);
            }
        };

        containerRef.current.addEventListener('scroll', handleScroll);
        return () => {
            containerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);
        
    return (
        <div>
            <div className="flex flex-col justify-center text-white px-4 lg:px-40 mt-16 md:mt-24 benefits pb-8">
                <div className="text-2xl md:text-4xl font-bold text-center pb-16 lg:pb-20">
                    <p> <span className="text-yellow-500">Benefits</span> of joining Product Space</p>
                </div>

                <div className=" benefits-scroll">
                    <div className="flex flex-col lg:flex-row lg:h-80 benefits-scroll-child">
                        <div className="hidden lg:block flex flex-col space-y-2">
                            {items.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-1 h-20 ${activeIndex === index ? 'bg-yellow-500' : 'bg-gray-600'}`}
                                ></div>
                            ))}
                        </div>
                        <div className="block lg:hidden flex justify-center flex space-x-2 pb-10">
                            {items.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-20 h-1 ${activeIndex === index ? 'bg-yellow-500' : 'bg-gray-600'}`}
                                ></div>
                            ))}
                        </div>
                        <div
                            ref={containerRef}
                            className="overflow-x-auto overflow-y-auto flex flex-col lg:flex-row scrollbar-thin"
                        >
                            <div className="flex flex-row lg:flex-col space-x-4 lg:space-y-4">
                                {items.map((item, index) => (
                                    <div key={index} className="section">
                                        <Card
                                            title1={item.title1}
                                            title2={item.title2}
                                            img={item.img}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='px-4 pb-8 pt-16 md:py-8'>
                <hr style={{ borderColor: "#3f3f46" }} className='block md:hidden' />
            </div>
        </div>



    );
}

export default Benefits;