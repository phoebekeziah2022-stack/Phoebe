import { Link } from "react-router-dom";

function Rockets() {
  const rockets = [
    {
      name: "Falcon 1",
      desc: "Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      image: "/images/falcon1.jpg",
      detailPage: "/rockets/falcon1",
    },
    {
      name: "Falcon 9",
      desc: "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX...",
      image: "/images/falcon9.jpg",
      detailPage: "/rockets/falcon9",
    },
    {
      name: "Falcon Heavy",
      desc: "Falcon Heavy is a super heavy-lift launch vehicle with partial reusability that can carry cargo into Earth orbit and beyond.",
      image: "/images/falconheavy.jpg",
      detailPage: "/rockets/falconheavy",
    },
    {
      name: "Starship",
      desc: "Starship is a two-stage, fully reusable, super heavy-lift launch vehicle",
      image: "/Images/starship.jpg",
      detailPage: "/rockets/starship",
    },
  ];

  return (
    <div className="relative text-white bg-black">
      <div
        className="w-full h-[90vh] bg-cover bg-center relative -mt-[32px]"
        style={{
          backgroundImage: `url(/images/R1.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold drop-shadow-lg z-10 -mt-48">
             SpaceX Rockets
          </h1>
        </div>
      </div>

      <div
        className="relative z-10 -mt-48 p-8 
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
                   bg-gradient-to-b from-[#4a3228]/90 to-black/95"
      >
        {rockets.map((rocket, index) => (
          <Link
            to={rocket.detailPage} 
            key={index}
            className="bg-black/40 backdrop-blur-sm p-4 rounded-2xl shadow-lg 
                       hover:scale-105 hover:bg-black/60 transition duration-300 flex items-center gap-4"
          >

            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={rocket.image}
                alt={rocket.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-1 text-amber-300">
                {rocket.name}
              </h2>
              <p className="text-gray-200 text-sm">{rocket.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Rockets;
