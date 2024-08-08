
const Card = ({title1, title2, img}) => {
    const desc = "After having a friendly chat with Rohan over LinkedIn, I joined the cohort, and joining the cohort was the best decision I made during my transition to a core PM role. The sessions conducted by Rohan were always collaborative and knowledgeable, and at the end of it, we were all quite clear about what was expected from us in the role.";

    return (
        <div className=" min-w-[300px] md:min-w-[400px] lg:min-w-[500px] mx-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                    <div className="text-xl md:text-3xl font-bold px-2 md:px-8">
                        <p>
                            <span className="text-yellow-500">{ title1 }</span> {title2}
                        </p>
                    </div>
                    <div className="py-8 px-2 md:px-8">
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
                <div>
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Card;
