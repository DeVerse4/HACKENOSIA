import React, { useState } from 'react'
import FAQ from './FAQ';
import { questions } from './FaqQues';

const Accordion = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <div className="max-w-screen-xl mx-auto h-fit">
                <h1 className='text-4xl lg:text-5xl text-center mt-20 mb-10'>
                    Frequently Asked Question
                </h1>
                {
                    data.map((item) => {
                        const { id } = item;
                        return <FAQ key={id} {...item} />
                    })
                }
            </div>
        </>
    )
}

export default Accordion;
