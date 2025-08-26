import { useNavigate } from "react-router-dom";

function Cotsdemodetail() {
  const navigate = useNavigate();

  const launch = {
    name: "COTS Demo Flight 1",
    rocket: "Falcon 9",
    date_utc: "2010-12-08T15:43:00.000Z",
    success: true,
    details:
      "On December 8, 2010, SpaceX launched its first Commercial Orbital Transportation Services (COTS) demonstration mission. This marked the first time a private company launched, orbited, and recovered a spacecraft. The success of this mission laid the foundation for SpaceX's future resupply missions to the International Space Station (ISS).\n\nThe spacecraft, Dragon, was carried by a Falcon 9 rocket and completed two orbits before reentering Earth's atmosphere and splashing down in the Pacific Ocean. This historic flight proved that private industry could match — and eventually surpass — traditional government-led space efforts.",
    image: "/images/falcon9.jpg",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10 animate-fade-in">
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-xl mb-10 transform hover:scale-105 transition duration-700 ease-in-out">
        <img
          src={launch.image}
          alt={launch.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h1 className="text-5xl font-extrabold text-amber-400 tracking-wide animate-slide-in">
          {launch.name}
        </h1>

        <p className="text-xl text-gray-400 italic animate-fade-in delay-100">
          “If humanity is going to become a multi-planet species, we need a transportation system that is truly reliable and reusable.” – Elon Musk
        </p>

        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          This milestone in aerospace was powered by the <span className="text-amber-300 font-semibold">{launch.rocket}</span> rocket and launched on{" "}
          <span className="text-amber-300 font-semibold">{new Date(launch.date_utc).toLocaleString()}</span>. This mission was{" "}
          <span className={launch.success ? "text-green-400 font-semibold" : "text-red-500 font-semibold"}>
            {launch.success ? "a success ✅" : "a failure ❌"}
          </span>{" "}
          and it paved the way for commercial space exploration.
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

export default Cotsdemodetail;
