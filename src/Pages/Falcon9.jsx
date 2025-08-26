function Falcon9() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div
        className="w-full h-[70vh] bg-cover bg-center relative rounded-2xl shadow-lg"
        style={{
          backgroundImage: 'url(/images/falcon9.jpg)', 
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-amber-300">Falcon 9</h1>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed text-gray-300">
          Falcon 9 is a reusable, two-stage rocket designed and manufactured by
          SpaceX for the reliable and safe transport of satellites and the Dragon
          spacecraft into orbit. It is the world’s first orbital class rocket
          capable of reflight, revolutionizing access to space.
        </p>

        <h2 className="text-3xl font-semibold text-amber-400">
          Key Highlights
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>First flight: June 4, 2010</li>
          <li>Total launches: 300+ (and growing)</li>
          <li>First successful landing: December 21, 2015</li>
          <li>Reusable booster, drastically reducing launch costs</li>
        </ul>
      </div>
    </div>
  );
}

export default Falcon9;
