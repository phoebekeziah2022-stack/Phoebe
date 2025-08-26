import { useNavigate } from "react-router-dom";

function Dragon8detail() {
  const navigate = useNavigate();

  const launch = {
    name: "Dragon CRS-8",
    rocket: "Falcon 9",
    date_utc: "2016-04-08T20:43:00.000Z",
    success: true,
    details: `Dragon CRS-8 was a pivotal resupply mission to the International Space Station (ISS). Launched on April 8, 2016, it carried critical cargo, experiments, and equipment vital to the ongoing success of the ISS program.

This mission marked a major milestone as SpaceX successfully landed the Falcon 9’s first stage on the autonomous drone ship “Of Course I Still Love You” — a giant leap toward reusable rocketry.

The success of CRS-8 not only advanced scientific research aboard the ISS but also reinforced SpaceX’s commitment to revolutionizing spaceflight with cost-effective, reusable technology.`,
    image: "/images/l5.jpg", 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10 animate-fade-in">
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-xl mb-10 transform hover:scale-105 transition duration-700 ease-in-out">
        <img
          src={launch.image}
          alt={launch.name}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h1 className="text-6xl font-extrabold text-amber-400 tracking-widest animate-slide-in">
          {launch.name}
        </h1>

        <p className="text-xl text-gray-400 italic animate-fade-in delay-100">
          “The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt
        </p>

        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          The mission was launched aboard the <span className="text-amber-300 font-semibold">{launch.rocket}</span> rocket on{" "}
          <span className="text-amber-300 font-semibold">
            {new Date(launch.date_utc).toLocaleString()}
          </span>. Marked as{" "}
          <span className={launch.success ? "text-green-400 font-semibold" : "text-red-500 font-semibold"}>
            {launch.success ? "a success ✅" : "a failure ❌"}
          </span>, this mission showcased SpaceX’s growing prowess in space logistics and reusable rocketry.
        </p>

        <div className="bg-black/50 border border-amber-400 p-6 rounded-lg text-gray-200 whitespace-pre-line animate-fade-in delay-300 shadow-xl text-left">
          {launch.details}
        </div>
        
        <button
          onClick={() => navigate("/launches")}
          className="mt-10 px-6 py-3 bg-amber-400 text-black font-semibold rounded-md hover:bg-amber-500 transition duration-300 ease-in-out shadow-lg animate-fade-in delay-500"
        >
          ⬅ Back to Launches
        </button>
      </div>
    </div>
  );
}

export default Dragon8detail;
