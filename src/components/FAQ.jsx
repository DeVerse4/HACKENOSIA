import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = ({question, answer}) => {

    const [openAns, setOpenAns] = useState(false);

    return (
        <>
            <div className="max-w-screen-xl mx-auto h-fit px-5">
                <div className="flex justify-between mb-2 p-3 rounded-lg items-center bg-thBlue">
                    <h1 className="text-xl lg:text-2xl font-bold">{question}</h1>
                    <div className="text-2xl cursor-pointer" onClick={() => setOpenAns(!openAns)}>
                        {openAns ? <FaMinus /> : <FaPlus />}
                    </div>
                </div>
                {openAns &&
                    <p className="text-xl bg-thPurple p-3 rounded-lg my-2">
                        {answer}
                    </p>

                }
            </div>
        </>
    )
}

export default FAQ;
