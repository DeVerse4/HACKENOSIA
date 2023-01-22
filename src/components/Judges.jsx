import React from 'react';
import PageSection from './PageSection';

const Judges = () => {
    const judges = [
        {
            name: "Gyan Prakash",
            title: "Full Stack Developer",
            bio: "Itna code likhunga ki compiler bhi rone lage",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Ahmad Kamran",
            title: "Backend Developer",
            bio: "Itna code likhunga ki compiler bhi rone lage",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Shujauddin Qadri",
            title: "Full Stack developer",
            bio: "Itna code likhunga ki compiler bhi rone lage",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Pritam Kumar",
            title: "Backend Developer",
            bio: "Itna code likhunga ki compiler bhi rone lage",
            image: "https://via.placeholder.com/150"
        },
    ];

    return (
        <PageSection
            title="Meet our Judges"
            name="judges"
            subtitle="We are excited to introduce our panel of esteemed judges who will be evaluating and selecting the winning teams at HackEnosia. Our judges bring a wealth of experience and expertise from various industries and backgrounds, and we are honored to have them as part of our event.We are confident that our judges will bring a fair and unbiased evaluation to the event, and we are excited to see the innovative solutions that our participants will present.
            We would like to extend our thanks to our judges for taking the time to be a part of our event and for their invaluable contributions to the success of [Name of Hackathon]."
        >
            <div className="grid lg:grid-cols-4 gap-12 text-black">
                {judges.map(({ name, title, bio, image }) => (
                    <div
                        key={name}
                        className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center"
                    >
                        <div className="flex items-center justify-center duration-300 group-hover:scale-110">
                            <div className="p-5 m-4">
                                <img src={image} alt={name} />
                            </div>
                        </div>
                        <h3 className="text-2xl lg:text-2xl text-white capitalize">{name}</h3>
                        <p className="text-md text-white font-semibold my-1">{title}</p>
                        <p className="text-md text-white">{bio}</p>

                    </div>
                ))};
            </div>
        </PageSection>
    )
}

export default Judges;
