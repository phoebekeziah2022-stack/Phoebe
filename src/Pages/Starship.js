function Starship() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div
        className="w-full h-[70vh] bg-cover bg-center relative rounded-2xl shadow-lg"
        style={{
          backgroundImage: `url(/images/starship.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-amber-300">Starship</h1>
        </div>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        <p className="text-lg leading-relaxed text-gray-300">
          Starship is a fully reusable, super heavy-lift launch vehicle
          designed for missions to Mars and deep space. It is the next
          generation of SpaceX rockets, intended to replace Falcon Heavy.
        </p>

        <h2 className="text-3xl font-semibold text-amber-400">
          Key Highlights
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          <li>First integrated flight: April 20, 2023</li>
          <li>Fully reusable two-stage design</li>
          <li>Designed for Mars colonization and deep-space missions</li>
        </ul>
      </div>
    </div>
  );
}

export default Starship;
