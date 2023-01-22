import React from 'react';
import PageSection from './PageSection';

const Organizers = () => {
    const members = [
        {
            id: 1,
            name: "Gyan Prakash",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 2,
            name: "Gyan Prakash",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 3,
            name: "Gyan Prakash",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 4,
            name: "Gyan Prakash",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 5,
            name: "Gyan Prakash",
            image: "https://via.placeholder.com/150",
        },
        {
            id: 6,
            name: "Gyan Prakash",
            image: "https://via.placeholder.com/150",
        },
    ];
    return (
        <PageSection
            title="Organizers"
            name="organizers"
            subtitle=""
        >
            <div className="grid lg:grid-cols-6 gap-6 text-black">
                {members.map(({ id, image, name }) => (
                    <div
                        key={id}
                        className="group "
                    >
                        <div className="flex items-center justify-center duration-300 group-hover:scale-110">
                            <div className="p-5 ">
                                <img src={image} alt={id} className="rounded-full" />
                            </div>
                        </div>
                        <h3 className="text-2xl text-center lg:text-2xl text-white capitalize">{name}</h3>
                    </div>
                ))}
            </div>
        </PageSection>
    )
}

export default Organizers
