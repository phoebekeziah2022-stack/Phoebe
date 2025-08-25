// src/pages/Hisfalcon.jsx
import { Link } from "react-router-dom";

function Hisfalcon() {
  return (
    <div className="pt-6 px-8 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-amber-300">
        Falcon Delivers Payload to Orbit 🚀
      </h1>

      {/* Image */}
      <img
        src="/images/hf1.jpg"
        alt="Falcon Payload Orbit"
        className="w-full h-80 object-cover object-top rounded-lg shadow-lg mb-6"
      />

      {/* Content Box */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6">
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          On <span className="font-semibold">July 13, 2009</span>, Falcon 1
          made history by becoming the first privately developed liquid-fuel
          rocket to deliver a commercial satellite to orbit.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          This mission proved that private companies could succeed in
          spaceflight, a domain once reserved only for national agencies.
          It established SpaceX as a serious contender in the aerospace
          industry.
        </p>

        <p className="text-base italic text-gray-300 mb-6">
          This milestone laid the groundwork for the Falcon 9 and eventually
          Falcon Heavy, paving the way for reusable rockets.
        </p>

        {/* Back button */}
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

export default Hisfalcon;
