import { useNavigate } from "react-router-dom";

function Axiommission3detail() {
  const navigate = useNavigate();

  const launch = {
    name: "Axiom Mission 3",
    rocket: "Falcon 9",
    date_utc: "2025-10-15T10:00:00.000Z",
    success: null,
    details: `Axiom Mission 3 (Ax-3) is the third private astronaut flight to the International Space Station organized by Axiom Space.

The mission will carry private individuals and researchers aboard a Crew Dragon spacecraft, demonstrating the growing role of commercial space travel.

This marks another step toward establishing Axiom’s own commercial space station.`,
    image: "/images/hf1.jpg",
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
          “Redefining human access to low Earth orbit.”
        </p>

        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          Scheduled aboard <span className="text-amber-300 font-semibold">{launch.rocket}</span> on{" "}
          <span className="text-amber-300 font-semibold">{new Date(launch.date_utc).toLocaleString()}</span>, this mission highlights the future of private space exploration.
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

export default Axiommission3detail;
