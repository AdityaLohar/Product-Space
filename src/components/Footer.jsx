import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between text-white px-4 md:px-20 pb-16 pt-0">
            <div>
                <div className="text-2xl font-bold pb-2">
                    <p>P_</p>
                </div>
                <div className="font-semibold pb-2">
                    <p>PRODUCT <br /> SPACE</p>
                </div>
                <div className="text-gray-400 text-base pb-2 md:pb-4">
                    <p>A Great Place to Upskill</p>
                </div>

                <div className="text-gray-400 text-sm pb-12 md:py-6">
                    <p>© Propel learnings</p>
                </div>
            </div>

            <div className="flex justify-between md:gap-32">
                <div>
                    <p className="mb-3 font-semibold">RESOURCES</p>
                    <div className="flex flex-col gap-4 text-gray-400">
                        <p>Terms and Conditions</p>
                        <p>Privacy policy</p>
                        <p>Refund policy</p>
                        <p>Contact us</p>
                    </div>
                </div>

                <div>
                    <p className="mb-3 font-semibold">FOLLOW US</p>
                    <div className="flex flex-col gap-4 text-gray-400">
                        <div>
                            <p className="flex items-center gap-2">
                                <FaLinkedinIn/> LinkedIn
                            </p>
                        </div>
                        <div>
                            <p className="flex items-center gap-2"><FaDiscord /> Discord</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer