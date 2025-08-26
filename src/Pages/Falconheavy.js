function FalconHeavy() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div
        className="w-full h-[70vh] bg-cover bg-center relative rounded-2xl shadow-lg"
        style={{
          backgroundImage: 'url(/images/falconheavy.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-amber-300">Falcon Heavy</h1>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed text-gray-300">
          Falcon Heavy is a super heavy-lift launch vehicle with partial
          reusability. It can carry cargo into Earth orbit and beyond,
          making it the most powerful operational rocket in the world.
        </p>

        <h2 className="text-3xl font-semibold text-amber-400">
          Key Highlights
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>First flight: February 6, 2018</li>
          <li>Total launches: 3 (so far)</li>
          <li>First payload: Elon Musk’s Tesla Roadster</li>
          <li>Partial reusability of side boosters</li>
        </ul>
      </div>
    </div>
  );
}

export default FalconHeavy;
