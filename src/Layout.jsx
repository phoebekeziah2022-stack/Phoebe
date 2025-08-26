import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  const backgrounds = {
    "/": "/images/home.jpg",
    "/history": "/images/history.jpg",
    "/launches": "/images/launches.jpg",
    "/rockets": "/images/R1.jpg",
  };

  const background = backgrounds[location.pathname] || "/images/bg.jpg";

  return (
    <div
      className="relative min-h-screen text-white font-ddin bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <nav
        className="relative z-10 flex items-center justify-between bg-black/50 px-12"
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(8px) saturate(150%)",
          WebkitBackdropFilter: "blur(8px) saturate(150%)",
          height: "90px", 
        }}
      >
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="SpaceX Logo"
            className="h-20 w-auto hover:scale-105 transition-transform"
            style={{
              maxHeight: "80px",
            }}
          />
        </Link>

        <div className="flex justify-center gap-14">
          <Link
            to="/"
            className="text-white text-xl font-bold tracking-[3px] uppercase hover:text-gray-300 transition flex items-center"
          >
            Home
          </Link>
          <Link
            to="/history"
            className="text-white text-xl font-bold tracking-[3px] uppercase hover:text-gray-300 transition flex items-center"
          >
            History
          </Link>
          <Link
            to="/launches"
            className="text-white text-xl font-bold tracking-[3px] uppercase hover:text-gray-300 transition flex items-center"
          >
            Launches
          </Link>
          <Link
            to="/rockets"
            className="text-white text-xl font-bold tracking-[3px] uppercase hover:text-gray-300 transition flex items-center"
          >
            Rockets
          </Link>
        </div>

        <div style={{ width: "80px" }} />
      </nav>

      <div className="relative z-10 p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
