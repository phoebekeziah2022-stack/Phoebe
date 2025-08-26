// src/pages/History.jsx
import { Link } from "react-router-dom";

const eventsData = [
  {
    date: "2009-07-13",
    title: "Falcon Delivers Payload to Orbit",
    description:
      "Fifth successful flight of Falcon makes history, becoming the first privately developed liquid-fuel rocket to deliver a commercial satellite to orbit.",
    image: "/images/hf1.jpg",
    link: "/history/falcon-orbit",
  },
  {
    date: "2010-06-04",
    title: "First Successful Dragon Launch",
    description:
      "SpaceX becomes the first private company to successfully launch, orbit, and recover a spacecraft.",
    image: "/images/hf2.jpg",
    link: "/history/dragon-launch",
  },
  {
    date: "2010-12-08",
    title: "Dragon Capsule Berths with ISS",
    description:
      "Privately developed Dragon spacecraft 'berths' with the International Space Station successfully.",
    image: "/images/hf3.jpg",
    link: "/history/dragon-iss-berth",
  },
  {
    date: "2013-12-03",
    title: "First Falcon 9 GTO Mission",
    description:
      "Falcon 9 successfully deployed payload to Geosynchronous Transfer Orbit.",
    image: "/images/hf4.jpg",
    link: "/history/falcon9-gto",
  },
  {
    date: "2015-12-22",
    title: "Successful Falcon 9 Landing",
    description:
      "On December 21, 2015, the Falcon 9 rocket delivered 11 communications satellites to orbit, and the first stage returned and landed at Landing Zone 1 – the first-ever orbital class rocket landing.",
    image: "/images/hf5.jpg",
    link: "/history/falcon9-landing",
  },
];


function History() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-5xl font-bold text-blue-300 mb-8 text-center">
        SpaceX History
      </h1>
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-8 top-0 w-1 h-full bg-amber-300"></div>

        {eventsData.map((event, index) => {
          const CardContent = (
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 items-center hover:bg-black/60 transition">
              {event.image && (
                <div className="w-full md:w-48 h-48 flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold text-amber-300">
                  {event.title}
                </h2>
                <p className="text-gray-200 font-semibold">
                  Event Date: {event.date}
                </p>
                <p className="text-gray-300 mt-2">{event.description}</p>
              </div>
            </div>
          );

          return (
            <div key={index} className="relative mb-12 pl-16">
              {/* Timeline Dot */}
              <div className="absolute w-5 h-5 bg-amber-300 rounded-full left-6 top-4"></div>
              {event.link ? (
                <Link to={event.link}>{CardContent}</Link>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default History;
