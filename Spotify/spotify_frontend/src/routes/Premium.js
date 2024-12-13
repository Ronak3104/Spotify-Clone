import LoggedInContainer from '../containers/LoggedInContainer';

const Premium = () => {

    return(
        <LoggedInContainer currentActiveScreen= "myMusic">
            <div className='p4'>
                <div className='mt-3 ml-3 text-white font-semibold text-3xl'>
                    Our premium plans
                </div>
                <div className='flex items-center space-x-3 mt-3'>
                    <div className='h-4/5 w-1/3 mt-3 p-4 bg-black bg-opacity-30 text-white rounded-md flex-col items-center justify-center'>
                        <p className='font-semibold text-lg'>
                            Premium for
                        </p>
                        <p className='font-bold text-3xl text-premium-individual-card pt-2 pb-2'>
                            Individual
                        </p>
                        <p className='font-semibold'>
                            ₹59 for 4 months
                        </p>
                        <p className='font-semibold pb-4 text-gray-500'>
                            ₹119/ month after
                        </p>
                        <div className="border border-solid border-gray-500 w-full"></div>
                        <div className='mb-2'>
                            <ul className='font-semibold pt-3 pb-6' type="disc">
                                <li>1 Premium account</li>
                                <li>Cancel anytime</li>
                                <li>Subscribe or one-time payment</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center pb-4'>
                            <button className='bg-premium-individual-card flex items-center justify-center text-black font-semibold pl-8 pr-8 pt-4 pb-4 rounded-full'>
                                Get Premium Individual
                            </button>
                        </div>
                        <div>
                            <p className='text-gray-500 pt-2 pb-2 flex-col items-center justify-center'>
                            ₹59 for 4 months, then ₹119 per <br/>month after.Offer only available if you haven't tried Premium before.<span className='text-decoration-line: underline'>Terms apply.</span> Offer ends October 13,2024.
                            </p>
                        </div>
                    </div>
                    <div className='h-4/5 w-1/3 mt-3 p-4 bg-black bg-opacity-30 text-white rounded-md flex-col items-center justify-center'>
                            <p className='font-semibold text-lg'>
                                Premium for
                            </p>
                            <p className='font-bold text-3xl text-premium-mini-card pt-2 pb-2'>
                                Mini
                            </p>
                            <p className='font-semibold pb-4'>
                                ₹29 for 1 week
                            </p>
                            <div className="border border-solid border-gray-500 w-full"></div>
                        <div className='mb-2'>
                            <ul className='font-semibold pt-3 pb-6' type="disc">
                                <li>1 mobile-only Premium account</li>
                                <li>Offline listening of up to 30 songs on 1 device.</li>
                                <li>One-time payment</li>
                                <li>Basic audio quality</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center pb-4'>
                            <button className='bg-premium-mini-card flex items-center justify-center text-black font-semibold pl-8 pr-8 pt-4 pb-4 rounded-full'>
                                Get Premium Mini
                            </button>
                        </div>
                        <div>
                            <p className='text-gray-500 pt-2 pb-2 flex-col items-center justify-center'>
                            ₹29 for 1 week.Offer only available if you haven't tried Premium before.<span className='text-decoration-line: underline'>Terms apply.</span> Offer ends October 13,2024.
                            </p>
                        </div>
                    </div>
                    <div className='w-1/3 mt-3 p-4 bg-black bg-opacity-30 text-white rounded-md flex-col items-center justify-center'>
                        <p className='font-semibold text-lg'>
                            Premium for
                        </p>
                        <p className='font-bold text-3xl text-premium-family-card pt-2 pb-2'>
                            Family
                        </p>
                        <p className='font-semibold'>
                            ₹179 for 2 months
                        </p>
                        <p className='font-semibold pb-4 text-white'>
                            ₹179/ month after
                        </p>
                        <div className="border border-solid border-gray-500 w-full"></div>
                        <div className='mb-2 pt-3'>
                            <ul className='font-semibold pb-6' type="disc">
                                <li>Up to 6 Premium accounts</li>
                                <li>Cancel anytime</li>
                                <li>Subscribe or one-time payment</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center pb-4'>
                            <button className='bg-premium-family-card flex items-center justify-center text-black font-semibold pl-8 pr-8 pt-4 pb-4 rounded-full'>
                                Get Premium Family
                            </button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='text-gray-500 pt-2 pb-2 flex-col items-center justify-center'>
                            ₹179 for 2 months, then ₹179 per <br/>month after.Offer only available if you haven't tried Premium before.<span className='text-decoration-line: underline'>Terms apply.</span>. Offer ends October 23,2024.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-3 mt-3'>
                    <div className='h-4/5 w-1/3 mt-3 p-4 bg-black bg-opacity-30 text-white rounded-md flex-col items-center justify-center'>
                        <p className='font-semibold text-lg'>
                            Premium for
                        </p>
                        <p className='font-bold text-3xl text-premium-duo-card pt-2 pb-2'>
                            Duo
                        </p>
                        <p className='font-semibold'>
                            ₹149 for 2 months
                        </p>
                        <p className='font-semibold pb-4 text-gray-500'>
                            ₹149/ month after
                        </p>
                        <div className="border border-solid border-gray-500 w-full"></div>
                        <div className='mb-2'>
                            <ul className='font-semibold pt-3 pb-6' type="disc">
                                <li>2 Premium accounts</li>
                                <li>Cancel anytime</li>
                                <li>Subscribe or one-time payment</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center pb-4'>
                            <button className='bg-premium-duo-card flex items-center justify-center text-black font-semibold pl-8 pr-8 pt-4 pb-4 rounded-full'>
                                Get Premium Duo
                            </button>
                        </div>
                        <div>
                            <p className='text-gray-500 pt-2 pb-2 flex-col items-center justify-center'>
                            ₹149 for 2 months, then ₹149 per <br/>month after.Offer only available if you haven't tried Premium before.<span className='text-decoration-line: underline'>Terms apply.</span> Offer ends October 25,2024.
                            </p>
                        </div>
                    </div>
                    <div className='h-4/5 w-1/3 mt-3 p-4 bg-black bg-opacity-30 text-white rounded-md flex-col items-center justify-center'>
                            <p className='font-semibold text-lg'>
                                Premium for
                            </p>
                            <p className='font-bold text-3xl text-premium-student-card pt-2 pb-2'>
                                Student
                            </p>
                            <p className='font-semibold'>
                                ₹59 for 2 months
                            </p>
                            <p className='font-semibold pb-4'>
                                ₹59/ month after
                            </p>
                            <div className="border border-solid border-gray-500 w-full"></div>
                        <div className='mb-2'>
                            <ul className='font-semibold pt-3 pb-6' type="disc">
                                <li>1 verified Premium account</li>
                                <li>Discount for eligible students</li>
                                <li>Cancel anytime</li>
                                <li>Subscribe or one-time payment</li>
                            </ul>
                        </div>
                        <div className='flex items-center justify-center pb-4'>
                            <button className='bg-premium-student-card flex items-center justify-center text-black font-semibold pl-8 pr-8 pt-4 pb-4 rounded-full'>
                                Get Premium Student
                            </button>
                        </div>
                        <div>
                            <p className='text-gray-500 pt-2 pb-2 flex-col items-center justify-center'>
                            ₹59 for 2 months.Offer only available if you haven't tried Premium before.<span className='text-decoration-line: underline'>Terms apply.</span> Offer ends October 30,2024.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LoggedInContainer>
    );
};

export default Premium;