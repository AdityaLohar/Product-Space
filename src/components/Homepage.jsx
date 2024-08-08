import CardHome from "./CardHome";
import mentor1 from "../assets/mentors-image1.png"
import mentor2 from "../assets/mentor1.png"
import mentor3 from "../assets/mentor2.png"
import { GoArrowRight } from "react-icons/go";

const cards = [
  {
    id: 1,
    image: mentor1,
    title: 'Meet our mentors',
    name: 'Chris Barton'
  },
  {
    id: 2,
    image: mentor2,
    title: 'Meet our mentors',
    name: 'Chris Barton'
  },
  {
    id: 3,
    image: mentor3,
    title: 'Meet our mentors',
    name: 'Chris Barton'
  },
  {
    id: 4,
    image: mentor1,
    title: 'Meet our mentors',
    name: 'Chris Barton'
  },
];

const Homepage = () => {
  return (
    <div>

      <div className="bg-transparent text-white py-16 md:py-24 sm:px-6 lg:px-32">
        <div className=" mx-auto flex flex-col lg:flex-row items-center gap-24 lg:gap-4">

          <div className="lg:w-1/2 px-6 md:px-0">
            <h1 className="text-2xl lg:text-5xl font-bold mb-4">Empower your product management journey</h1>
            <p className="lg:w-4/5 text-md lg:text-xl mb-4">Unlock Your Potential with Expert-Led Learning and Community Support</p>
            <div className="lg:w-4/5 flex items-center mb-4 text-sm lg:text-base">
              <span className="text-yellow-500">4.8 stars</span>
              <span className="ml-2">500+ Student Reviews</span>
            </div>
            <div className="lg:w-4/5 flex flex-col gap-4 mt-8 font-semibold text-lg lg:text-xl">
              <button className="bg-transparent text-yellow-500 border border-yellow-500 py-3 px-4 rounded-full">Book a 1:1 Mentor Call</button>
              <button className="bg-yellow-500 text-black py-3 px-4 rounded-full hover:bg-yellow-600 flex items-center justify-center gap-1">
                  Get Started
                  <GoArrowRight />
              </button>
            </div>
          </div>

          <div className="w-full md:w-3/4 lg:w-1/2 h-full flex overflow-x-scroll scrollbar-hide space-x-4 homecard box-shadow-1 rounded-lg">
            {cards.map((card) => (
              <CardHome key={card.id} number={card.id} image={card.image} title={card.title} name={card.name} />
            ))}
          </div>

        </div>
      </div>

      <div className='px-4 pb-16 md:py-8'>
        <hr style={{ borderColor: "#3f3f46" }} className='block md:hidden' />
      </div>

    </div>
  );
};

export default Homepage;
