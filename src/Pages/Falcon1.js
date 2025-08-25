function Falcon1() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      {/* Banner */}
      <div
        className="w-full h-[70vh] bg-cover bg-center relative rounded-2xl shadow-lg"
        style={{
          backgroundImage: `url(/images/falcon1.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-amber-300">Falcon 1</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed text-gray-300">
          Falcon 1 became the first privately-developed liquid-fuel launch
          vehicle to go into orbit around the Earth. It was a historic milestone
          for SpaceX, proving that small, private companies could achieve what
          only governments had done before.
        </p>

        <h2 className="text-3xl font-semibold text-amber-400">
          Key Highlights
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>First flight: March 24, 2006</li>
          <li>Total launches: 5 (2006–2009)</li>
          <li>First successful orbital launch: September 28, 2008</li>
        </ul>
      </div>
    </div>
  );
}

export default Falcon1;
