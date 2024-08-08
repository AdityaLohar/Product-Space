
import DropdownList from './DropdownList';
const Faq = () => {
    return (
        <div className="text-white px-4 md:px-20">
            <div>
                <div className="text-3xl md:text-[41px] font-semibold text-center pb-8 md:pb-12">
                    <p>Frequently Asked Questions (FAQs)</p>
                </div>

                <DropdownList />
            </div>

            <div className='py-16'>
                <hr style={{borderColor: "#3f3f46"}} className='block md:hidden'/>
            </div>

        </div>
    )
}

export default Faq