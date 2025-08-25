// src/pages/Successfal.jsx
import { Link } from "react-router-dom";

function Successfal() {
  return (
    <div className="pt-6 px-8 max-w-5xl mx-auto">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-green-400">
        Successful Falcon 9 Landing 🛰️🌍
      </h1>

      {/* Image */}
      <img
        src="/images/hf5.jpg"
        alt="Successful Falcon 9 Landing"
        className="w-full h-80 object-cover object-top rounded-lg shadow-lg mb-6"
      />

      {/* Text Box */}
      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6">
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          On <span className="font-semibold">December 21, 2015</span>, SpaceX
          achieved a historic breakthrough when the Falcon 9 rocket successfully
          delivered <span className="font-semibold">11 communications satellites</span>{" "}
          into orbit and returned its first stage booster for a safe landing at{" "}
          <span className="font-semibold">Landing Zone 1</span>.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          This event marked the{" "}
          <span className="font-semibold">first-ever orbital class rocket landing</span>,
          proving that rockets could be reused rather than discarded after a single mission.
        </p>

        <p className="text-base italic text-gray-300 mb-6">
          The successful landing revolutionized spaceflight economics and set
          SpaceX on the path toward developing a fully reusable launch system.
        </p>

        {/* Back button */}
        <div className="flex justify-center">
          <Link
            to="/history"
            className="bg-green-400 text-black px-6 py-3 rounded-xl font-bold shadow-md hover:bg-green-500 hover:shadow-lg transition"
          >
            ⬅ Back to Timeline
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Successfal;
