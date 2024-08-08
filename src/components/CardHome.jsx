import { SiShazam } from "react-icons/si";

const CardHome = ({ number, image, title, name }) => {
    return (
        <div className={` ${number == 1 ? "ml-2" : ""} min-w-[300px] h-[400px] xl:min-w-[400px] xl:h-[500px] cards bg-cover bg-center text-white flex items-end p-4 rounded-lg my-5`} style={{ backgroundImage: `url(${image})` }} >
            <div>
                <div className="bg-black bg-opacity-70 p-2 rounded-lg w-[160px] md:w-[180px] text-center">
                    <h3 className="text-base md:text-lg">{title}</h3>
                </div>

                <div className="w-[265px] xl:w-[365px] pt-4">
                    <hr style={{ borderColor: "#797978" }} />
                </div>

                <div className="p-2 pt-4">
                    <h3 className="text-base md:text-lg">{name}</h3>
                </div>

                <div className="flex items-center pl-2 gap-2">
                    <SiShazam />
                    <h3 className="text-base md:text-xs font-bold">SHAZAM</h3>
                </div>
            </div>
            
        </div>
    );
};

export default CardHome;