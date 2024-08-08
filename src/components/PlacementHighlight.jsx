import bgImage1 from "../assets/face-image.png";
import Carousel from "./Carousl";

const slides = [
    {
      name: "Ed Trefzger",
      title: "The best decision I made during my transition to the PM role",
      desc: "After having a friendly chat with Rohan over LinkedIn, I joined the cohort, and joining the cohort was the best decision I made during my transition to a core PM role. The sessions conducted by Rohan were always collaborative and knowledgeable, and at the end of it, we were all quite clear about what was expected from us in the role.",
      image: bgImage1,
    },
    {
      name: "Jane Doe",
      title: "Another impactful statement about the role",
      desc: "Further explanation and context about the role or experience.",
      image: bgImage1,
    },
    {
      name: "Jane Doe",
      title: "Another impactful statement about the role",
      desc: "Further explanation and context about the role or experience.",
      image: bgImage1,
    },
    {
      name: "Jane Doe",
      title: "Another impactful statement about the role",
      desc: "Further explanation and context about the role or experience.",
      image: bgImage1,
    },
    {
      name: "Jane Doe",
      title: "Another impactful statement about the role",
      desc: "Further explanation and context about the role or experience.",
      image: bgImage1,
    },
  ];

const PlacementHighlight = () => {
    return (
        <div>
            <div className="mt-8 lg:pt-16 pb-8 text-white placement-highlight box-shadow-1 bg-transparent lg:bg-center lg:bg-cover items-center">
                <div>
                    <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 lg:mb-16">
                        Placement <span className="text-yellow-500">Highlights</span>
                    </h1>
                </div>

                <Carousel slides={slides} />

            </div>

            <div className='px-4 pt-16 md:py-8'>
                <hr style={{ borderColor: "#3f3f46" }} className='block md:hidden' />
            </div>
        </div>
            
    );
};

export default PlacementHighlight;
