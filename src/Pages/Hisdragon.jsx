// src/Pages/Hisdragon.jsx
import React from "react";

function Hisdragon() {
  return (
    <div className="pt-4 px-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-amber-300">
        First Successful Dragon Launch 🚀
      </h1>

      <img
        src="/images/hf2.jpg"
        alt="First Successful Dragon Launch"
        className="w-full h-80 object-cover object-top rounded-lg shadow-lg mb-6"
      />

      <div className="bg-black/40 backdrop-blur-md rounded-xl shadow-lg p-6">
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          On <span className="font-semibold">June 4, 2010</span>, SpaceX
          achieved a groundbreaking milestone by launching the Dragon
          spacecraft aboard the Falcon 9 rocket. This mission made SpaceX the
          first private company to successfully design, launch, orbit, and
          recover a spacecraft.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          The Dragon capsule’s safe return demonstrated SpaceX’s capability to
          build spacecraft that could eventually support cargo and crew
          missions to the International Space Station. This historic achievement
          marked the beginning of Dragon’s legacy as a vital part of NASA’s
          Commercial Resupply Services program.
        </p>

        <p className="text-base italic text-gray-300">
          This mission proved that privately developed spacecraft could achieve
          feats once reserved for government agencies, setting the stage for a
          new era in space exploration.
        </p>
      </div>
    </div>
  );
}

export default Hisdragon;
