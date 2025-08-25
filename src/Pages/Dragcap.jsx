// src/pages/Dragcap.jsx
import { Link } from "react-router-dom";

function Dragcap() {
  return (
    <div className="pt-6 px-8 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-amber-300">
        Dragon Capsule Berths with ISS 🛰️
      </h1>

      {/* Image */}
      <img
        src="/images/hf3.jpg"
        alt="Dragon Capsule Berths with ISS"
        className="w-full h-80 object-cover object-top rounded-lg shadow-lg mb-6"
      />

      {/* Text Box */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6">
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          On <span className="font-semibold">December 8, 2010</span>, the Dragon
          spacecraft became the first privately developed vehicle to berth with
          the International Space Station (ISS).
        </p>

        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          This achievement demonstrated SpaceX’s ability to deliver cargo safely
          to orbit and marked a crucial milestone for NASA’s Commercial
          Resupply Services program. Dragon’s success opened a new chapter in
          private–public collaboration for human spaceflight.
        </p>

        <p className="text-base italic text-gray-300 mb-6">
          By proving it could dock with the ISS, SpaceX paved the way for future
          crewed missions and strengthened its role in modern space exploration.
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

export default Dragcap;
