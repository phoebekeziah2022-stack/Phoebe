import { useNavigate } from "react-router-dom";

function Falcondetail() {
  const navigate = useNavigate();

  const launch = {
    name: "FalconSat",
    rocket: "Falcon 1",
    date_utc: "2006-03-24T22:30:00.000Z",
    success: false,
    details:
      "On March 24, 2006, a dream was launched into the night sky aboard a slender vehicle known as Falcon 1. This was no ordinary rocket; it was the first spark in the engine of SpaceX’s audacious mission — to revolutionize space travel.\n\nThe mission, named FalconSat, was more than metal and fuel. It was the embodiment of human determination. And yet, just 33 seconds after liftoff, silence replaced the roar. A malfunction, a failure — the rocket was lost.\n\nBut from the ashes of this failure rose resilience. SpaceX didn’t fall back — it charged forward. This wasn’t just a launch. It was the first heartbeat in the story of a company that would one day land rockets on ships and send humans to other worlds.",
    image: "/images/l1.jpg",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-10 animate-fade-in">
      <div className="w-full h-72 rounded-xl overflow-hidden shadow-xl mb-10 transform hover:scale-105 transition duration-700 ease-in-out">
        <img
          src={launch.image}
          alt={launch.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h1 className="text-6xl font-extrabold text-amber-400 tracking-widest animate-slide-in">
          {launch.name}
        </h1>

        <p className="text-xl text-gray-400 italic animate-fade-in delay-100">
          “Failure is an option here. If things are not failing, you are not innovating enough.” – Elon Musk
        </p>

        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          The journey began aboard <span className="text-amber-300 font-semibold">{launch.rocket}</span>, the very first vehicle in SpaceX’s lineage. On the early morning of{" "}
          <span className="text-amber-300 font-semibold">
            {new Date(launch.date_utc).toLocaleString()}
          </span>, the rocket lifted off in pursuit of the stars. Yet just moments after takeoff, the mission met adversity. Marked as{" "}
          <span className={launch.success ? "text-green-400 font-semibold" : "text-red-500 font-semibold"}>
            {launch.success ? "a success ✅" : "a failure ❌"}
          </span>, this launch didn’t just end a flight — it ignited a future.
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

export default Falcondetail;
