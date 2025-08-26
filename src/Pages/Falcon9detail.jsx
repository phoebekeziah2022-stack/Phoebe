import { useNavigate } from "react-router-dom";

function Falcon9Detail() {
  const navigate = useNavigate();

  const launch = {
    name: "Falcon 9 Test Flight",
    rocket: "Falcon 9",
    date_utc: "2010-06-04T18:45:00.000Z",
    success: true,
    details:
      "On June 4, 2010, SpaceX took a monumental leap forward. The Falcon 9 soared into the skies from Cape Canaveral, carrying not just a payload, but the hopes of a private spaceflight revolution.\n\nThis test flight marked the first successful launch of the Falcon 9 rocket — a two-stage vehicle built from the ground up by SpaceX. As the engines roared to life and the rocket ascended, a new chapter began.\n\nThe mission was a full success. It demonstrated the viability of the Falcon 9 platform, validated countless hours of engineering, and solidified SpaceX’s place in the future of orbital transport. What once seemed impossible — reliable, cost-effective private space travel — was now clearly within reach.",
    image: "/images/l2.jpg",
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
          “When something is important enough, you do it even if the odds are not in your favor.” – Elon Musk
        </p>

        <p className="text-lg text-gray-300 leading-relaxed animate-fade-in delay-200">
          Riding aboard the powerful <span className="text-amber-300 font-semibold">{launch.rocket}</span>, this landmark test flight occurred on{" "}
          <span className="text-amber-300 font-semibold">
            {new Date(launch.date_utc).toLocaleString()}
          </span>. It was deemed{" "}
          <span className={launch.success ? "text-green-400 font-semibold" : "text-red-500 font-semibold"}>
            {launch.success ? "a success ✅" : "a failure ❌"}
          </span>{" "}
          and marked the beginning of a new era in space exploration.
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

export default Falcon9Detail;
