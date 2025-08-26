// src/pages/Firstfalc.jsx
import { Link } from "react-router-dom";

function Firstfalc() {
  return (
    <div className="pt-6 px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-amber-300">
        First Falcon 9 GTO Mission 🌍🚀
      </h1>

      <img
        src="/images/hf4.jpg"
        alt="First Falcon 9 GTO Mission"
        className="w-full h-80 object-cover object-top rounded-lg shadow-lg mb-6"
      />

      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6">
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          On <span className="font-semibold">December 3, 2013</span>, SpaceX’s
          Falcon 9 rocket successfully deployed its payload into{" "}
          <span className="font-semibold">Geosynchronous Transfer Orbit (GTO)</span>,
          a critical milestone for commercial satellite launches.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          Delivering to GTO demonstrated Falcon 9’s ability to compete in the
          global satellite launch market, which is essential for telecommunications,
          weather monitoring, and Earth observation industries.
        </p>

        <p className="text-base italic text-gray-300 mb-6">
          This mission established SpaceX as a serious contender for high-value
          satellite contracts and solidified its reputation for cost-effective,
          reliable launches.
        </p>

        <div className="flex justify-center">
          <Link
            to="/history"
            className="bg-amber-300 text-black px-6 py-3 rounded-xl font-bold shadow-md hover:bg-amber-400 hover:shadow-lg transition"
          >
            ⬅ Back to Timeline
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Firstfalc;
