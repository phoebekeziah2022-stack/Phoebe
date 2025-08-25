import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const items = [
    {
      img: "/images/falcon9.jpg",
      title: "Falcon 9",
      desc: "First orbital class rocket capable of reflight.",
      link: "/rockets/falcon9",
    },
    {
      img: "/images/falconheavy.jpg",
      title: "Falcon Heavy",
      desc: "The most powerful operational rocket in the world.",
      link: "/rockets/falconheavy",
    },
    {
      img: "/images/starship.jpg",
      title: "Starship",
      desc: "Fully reusable transportation system for Mars & beyond.",
      link: "/rockets/starship",
    },
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      className="relative w-full h-screen text-white overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: "url('/images/space-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Spacing */}
      <div className="mt-10 flex flex-col items-center">
        {/* ✨ Hero Section */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg">
            Welcome to SpaceX
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 italic">
            Making life multi-planetary.
          </p>
          <button
            onClick={() => navigate("/launches")}
            className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition duration-300 shadow-lg"
          >
            View Upcoming Launches
          </button>
        </div>

        {/* 🚀 Launch Image Box (smaller) */}
        <div
          onClick={() => navigate(items[index].link)}
          className="mt-12 w-[440px] md:w-[550px] bg-white/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 cursor-pointer hover:scale-105 transition-transform"
          style={{
            boxShadow: "0 0 18px 3px rgba(255, 255, 255, 0.18)",
          }}
        >
          <div className="relative w-full h-[180px] md:h-[220px]">
            <AnimatePresence initial={false}>
              <motion.img
                key={index}
                src={items[index].img}
                alt={items[index].title}
                className="absolute w-full h-full object-cover "
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* 📦 Text BELOW image */}
        <div
          onClick={() => navigate(items[index].link)}
          className="w-[440px] md:w-[550px] bg-[#0a0a2a]/70 backdrop-blur-sm rounded-b-2xl shadow-lg px-5 py-4 text-center mt-[-4px] border border-white/20 cursor-pointer hover:bg-[#0a0a2a]/90 transition"
          style={{
            boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.12)",
          }}
        >
          <h3 className="text-lg md:text-xl font-bold">{items[index].title}</h3>
          <p className="text-sm md:text-base text-gray-200 mt-1">
            {items[index].desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
