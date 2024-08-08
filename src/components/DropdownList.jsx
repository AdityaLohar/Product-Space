import React, { useState } from 'react';

const DropdownItem = ({ question, content, isOpen, onClick }) => {
    return (
        <div className="relative">
            <div className="flex justify-between pb-4 cursor-pointer" onClick={onClick}>
                <div className='text-base md:text-lg'>
                    <p>{question}</p>
                </div>
                <div>
                    <svg
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{ maxHeight: isOpen ? '1000px' : '0' }}
            >
                <div className="p-4 bg-[#131313] shadow-lg mb-3 rounded-lg">
                    {content}
                </div>
            </div>
        </div>
    );
};

const DropdownList = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        "Who is eligible to apply for the product fellowship cohort?",
        "What is the price for the product fellowship cohort?",
        "When does the next cohort begin?",
        "Do I get a certificate post the completion of the cohort?",
        "Can I connect with the past alumni?"
    ];

    const contents = [
        "Content for eligibility...",
        "Content for price...",
        "Content for next cohort...",
        "Content for certificate...",
        "Content for alumni..."
    ];

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {questions.map((question, index) => (
                <DropdownItem
                    key={index}
                    question={question}
                    content={contents[index]}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default DropdownList;
