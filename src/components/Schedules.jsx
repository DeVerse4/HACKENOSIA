import React from 'react';
import PageSection from './PageSection';

const Schedules = () => {
  const Schedules = [
    {
      id: 1,
      title: "Registration",
      subtitle: "Online registration for the hackathon will open on Thursday January 26, 2023 and close after 40 days on Tuesday March 07, 2023. Participants will need to register online in order to participate in the event.  The registration process will include providing personal information and agreeing to the terms and conditions of the event.",
    },
    {
      id: 2,
      title: "Ideation",
      subtitle: "Before the hackathon begins, participants will have the opportunity to brainstorm and come up with ideas for their projects. This can be done individually or in teams. During this time, participants can also network and form teams with other participants.",
    },
    {
      id: 3,
      title: "Hackathon Begins",
      subtitle: "The hackathon will begin on Saturday March 25, 2023. Participants will have 24 hours to work on their projects. During this time, participants will have access to resources such as WiFi, electricity, and food.",
    },
    {
      id: 4,
      title: "Hackathon Ends",
      subtitle: "The hackathon will end on Sunday March 26, 2023. Participants will have to submit their projects on the website before the deadline.",
    },
    {
      id: 5,
      title: "Judging",
      subtitle: "The judging process will take place on Monday March 27, 2023. The judging process will be done by a panel of judges, which includes industry experts and investors. The winners will be announced and prizes will be awarded.",
    },
    {
      id: 6,
      title: "Closing Ceremony",
      subtitle: "The closing ceremony will take place on [insert date and time]. During this event, the top teams will present their projects to a panel of judges, which includes industry experts and investors. The winners will be announced and prizes will be awarded.",
    },
  ];
  return (
    <PageSection
      name="Schedules"
      title="Flow of Event"
      subtitle={``}
    >
      <>
        <div className="grid lg:grid-cols-3 text-left gap-8 mb-16">
          {Schedules.map(({ id, title, subtitle }) => (
            <div
              key={id}
              className="bg-gradient-to-r from-thOrange to-thBlue text-black p-4 rounded-lg"
            >
              <h1 className="text-3xl text-white font-bold mb-2">{title}</h1>
              <p className="text-white">{subtitle}</p>
            </div>
          ))}
        </div>
        <div className='text-gray-300 mt-10'>
          <ul className='list-disc'>
            <li>
              We will also be having mentorship sessions, workshops, networking events and other activities during the hackathon. The schedule for these events will be available on the website and will be shared with the participants before the event.
            </li>
            <li>
              We encourage all participants to review the schedule and plan their time accordingly. We look forward to seeing everyone at the hackathon and can't wait to see the innovative solutions that will be developed.
            </li>
            <li>
              We will also provide food and drinks throughout the event, and we will have a designated area for participants to relax and take breaks during the hackathon.
            </li>
            <li>
              Please note that this schedule is subject to change, and we will update the schedule as needed. Be sure to check the website frequently for the most up-to-date schedule information.
            </li>
            <li>
              We understand that the schedule can be intense, but we are here to support you and make sure you have the best experience at the hackathon.
            </li>
          </ul>
        </div>
      </>
    </PageSection>
  )
}

export default Schedules
