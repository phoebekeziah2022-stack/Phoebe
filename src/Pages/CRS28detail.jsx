import { useNavigate } from "react-router-dom";

function CRS28detail() {
  const navigate = useNavigate();

  const launch = {
    name: "Commercial Resupply Service 28",
    rocket: "Falcon 9",
    date_utc: "2025-11-10T13:00:00.000Z",
    success: null,
    details: `CRS-28 (Commercial Resupply Service 28) is a planned mission to resupply the International Space Station.

It will carry scientific payloads, experiments, and essential supplies to support the ongoing research and operations aboard the station.

The mission continues NASA and SpaceX’s collaboration in maintaining ISS functionality through reliable cargo delivery.`,
    image: "/images/l5.jpg",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10 animate-fade-in">
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-xl mb-10 transform hover:scale-105 transition duration-700 ease-in-out">
        <img src={launch.image} alt={launch.name} className="w-full h-full object-cover" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h1 className="text-6xl font-extrabold text-amber-400 tracking-widest animate-slide-in">
          {launch.name}
        </h1>

        <p className="text-xl text-gray-400 italic animate-fade-in delay-100">
          “Fueling science and sustainability in orbit.”
        </p>

        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          Launching via <span className="text-amber-300 font-semibold">{launch.rocket}</span> on{" "}
          <span className="text-amber-300 font-semibold">{new Date(launch.date_utc).toLocaleString()}</span>. This marks another vital delivery mission to the ISS.
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

export default CRS28detail;
