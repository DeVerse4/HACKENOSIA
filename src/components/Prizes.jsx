import React from 'react';
import PageSection from './PageSection';
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'

const Prizes = () => {
    const Prizes = [
        {
            id: 1,
            icon: <img src={first} alt="firstPrize" className="h-32" />,
            title: "First Prize",
            subtitle: "The first-place team will receive a cash prize of ₹25,000 and a selection of goodies and swags, including T-shirts.",
        },
        {
            id: 2,
            icon: <img src={second} alt="secondPrize" className="h-32" />,
            title: "Second Prize",
            subtitle: "The first-place team will receive a cash prize of ₹15,000 and a selection of goodies and swags, including T-shirts.",
        },
        {
            id: 3,
            icon: <img src={third} alt="thirdPrize" className="h-32" />,
            title: "Third Prize",
            subtitle: "The first-place team will receive a cash prize of ₹5,000 and a selection of goodies and swags, including T-shirts.",
        },
    ];
    return (
        <PageSection
            title="Prizes"
            name="Prizes"
            subtitle={`We are excited to offer a variety of prizes to recognize and reward the innovative solutions developed by our participants.
            We are excited to see the innovative solutions that will be developed during the hackathon and look forward to recognizing and rewarding the best ideas.
            `}
        >
            <div className="grid lg:grid-cols-3 gap-12 text-black">
                {Prizes.map(({ id, icon, title, subtitle }) => (
                    <div
                        key={id}
                        className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-4 text-center"
                    >
                        <div className="flex items-center justify-center duration-300 group-hover:scale-110">
                            <div className="rounded-full p-5 m-4">{icon}</div>
                        </div>
                        <h1 className="text-2xl lg:text-4xl my-3 text-white capitalize">{title}</h1>
                        <p className="text-lg text-white">{subtitle}</p>
                    </div>
                ))}
            </div>
            <div className='text-gray-300 mt-10'>
                <p>
                    All prize winners will also receive recognition on our website and social media channels, as well as the opportunity to network with industry leaders and potential investors.

                    Please note that all prize awards are subject to terms and conditions, and winners will be selected by a panel of judges based on the criteria provided.
                </p>
            </div>
        </PageSection>
    )
}

export default Prizes;
