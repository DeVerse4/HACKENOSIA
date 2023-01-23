import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { questions } from './FaqQues';

const FAQ = () => {

    const [openAns, setOpenAns] = useState(false);

    return (
        <>
            {questions.map((faqs, id) => (
                <div className="flex flex-col gap-4 overflow-hidden m-8 bg-gray-900 rounded-lg text-lg" key={id} >
                    <div className='flex justify-between'>
                        <span className="border-l-4 pl-4 py-3 font-semibold" >{faqs.question}</span>
                        <span className='pr-4 py-3' onClick={() => setOpenAns(!openAns)}>
                            {openAns ? <FaMinus /> : <FaPlus />}
                        </span>
                    </div>
                    {
                        openAns && <p className='p-4'>{faqs.answer}</p>
                    }
                </div>
            ))}
        </>
    )
}

export default FAQ
