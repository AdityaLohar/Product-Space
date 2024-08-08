import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-black md:bg-transparent text-white p-4 px-6 lg:px-32">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <span className="text-white">Product</span> <span className="text-yellow-500">Space</span>
                </div>
                
                <button 
                    className="lg:hidden flex items-center space-x-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="text-white">Menu</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <div className="hidden lg:flex space-x-6 xl:space-x-12 text-base xl:text-lg">
                    <a href="#" className="hover:underline">PM Fellowship Course</a>
                    <a href="#" className="hover:underline">Scholarship</a>
                    <a href="#" className="hover:underline">Masterclass</a>
                    <a href="#" className="hover:underline">Resources</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>

            <div 
                className={`lg:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">PM Fellowship Course</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Scholarship</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Masterclass</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Resources</a>
                <a href="#" className="block py-2 px-4 hover:bg-gray-700">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
