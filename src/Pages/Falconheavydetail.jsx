import { useNavigate } from "react-router-dom";

function Falconheavydetail() {
  const navigate = useNavigate();

  const launch = {
    name: "Falcon Heavy Demo",
    rocket: "Falcon Heavy",
    date_utc: "2018-02-06T20:45:00.000Z",
    success: true,
    details:
      "On February 6, 2018, the Falcon Heavy took flight for the first time, becoming the most powerful operational rocket in the world by a factor of two. With 27 engines roaring beneath it, Falcon Heavy launched into the sky carrying an unexpected payload: Elon Musk’s personal cherry-red Tesla Roadster.\n\nThis spectacular test flight marked a pivotal moment not just for SpaceX but for commercial spaceflight as a whole. The rocket’s two side boosters successfully returned and landed in near-perfect synchronization — an iconic moment watched by millions around the globe. The central core missed its droneship landing but did little to dull the triumph.\n\nThe Falcon Heavy Demo proved that heavy-lift capabilities were no longer reserved for government agencies. The future of space exploration had officially entered the commercial era.",
    image: "/images/l4.jpg",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10 animate-fade-in">
      {/* Banner */}
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-xl mb-10 transform hover:scale-105 transition duration-700 ease-in-out">
        <img
          src={launch.image}
          alt={launch.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h1 className="text-5xl font-extrabold text-amber-400 tracking-wide animate-slide-in">
          {launch.name}
        </h1>

        <p className="text-xl text-gray-400 italic animate-fade-in delay-100">
          “It’s kind of silly and fun, but silly and fun things are important.” – Elon Musk
        </p>

        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          The legendary <span className="text-amber-300 font-semibold">{launch.rocket}</span> took off on{" "}
          <span className="text-amber-300 font-semibold">{new Date(launch.date_utc).toLocaleString()}</span>, making history as{" "}
          <span className="text-green-400 font-semibold">a successful ✅</span> demo of next-gen heavy-lift technology.
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

export default Falconheavydetail;
