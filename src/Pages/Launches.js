import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Helper to create URL-friendly slugs
const toSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

// Launch data
const launchesData = [
  {
    name: "FalconSat",
    rocket: "Falcon 1",
    date_utc: "2006-03-24T22:30:00.000Z",
    success: false,
    details: "Engine failure at 33 seconds and loss of vehicle",
    image: "/images/l1.jpg",
  },
  {
    name: "Falcon 9 Test Flight",
    rocket: "Falcon 9",
    date_utc: "2010-06-04T18:45:00.000Z",
    success: true,
    details: "First successful launch of Falcon 9",
    image: "/images/l2.jpg",
  },
  {
    name: "COTS Demo Flight 1",
    rocket: "Falcon 9",
    date_utc: "2010-12-08T15:43:00.000Z",
    success: true,
    details: "First successful demonstration mission to ISS",
    image: "/images/falcon9.jpg",
  },
  {
    name: "Falcon Heavy Demo",
    rocket: "Falcon Heavy",
    date_utc: "2018-02-06T20:45:00.000Z",
    success: true,
    details: "Maiden flight carrying Tesla Roadster",
    image: "/images/l4.jpg",
  },
  {
    name: "Dragon CRS-8",
    rocket: "Falcon 9",
    date_utc: "2016-04-08T20:43:00.000Z",
    success: true,
    details: "Delivered cargo to the ISS",
    image: "/images/l5.jpg",
  },
  {
    name: "Starlink 6-2",
    rocket: "Falcon 9",
    date_utc: "2025-09-20T12:00:00.000Z",
    success: null,
    details:
      "Continuing the Starlink constellation deployment, this mission will launch another batch of satellites to enhance global internet coverage.",
    image: "/images/l6.jpg",
  },
  {
    name: "Axiom Mission 3",
    rocket: "Falcon 9",
    date_utc: "2025-10-15T10:00:00.000Z",
    success: null,
    details:
      "The third private astronaut mission to the ISS under Axiom Space’s program, ferrying private citizens and researchers.",
    image: "/images/hf1.jpg",
  },
  {
    name: "Commercial Resupply Service 28",
    rocket: "Falcon 9",
    date_utc: "2025-11-10T13:00:00.000Z",
    success: null,
    details:
      "Another resupply mission to the ISS, carrying scientific experiments, supplies, and equipment to support station operations.",
    image: "/images/hf2.jpg",
  },
];

function Launches() {
  const [filterRocket, setFilterRocket] = useState("");
  const navigate = useNavigate();

  // Helper to determine if launch is upcoming
  const isUpcoming = (launch) => {
    return new Date(launch.date_utc) > new Date();
  };

  // FIXED: filter by rocket OR name
  const filteredLaunches = (launches) =>
    launches.filter(
      (launch) =>
        filterRocket === "" ||
        launch.rocket.toLowerCase().includes(filterRocket.toLowerCase()) ||
        launch.name.toLowerCase().includes(filterRocket.toLowerCase())
    );

  const pastLaunches = launchesData.filter((l) => !isUpcoming(l));
  const upcomingLaunches = launchesData.filter(isUpcoming);

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-5xl font-bold  text-blue-200 mb-8 text-center">
        SpaceX Launches
      </h1>

      {/* Filter */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        <input
          type="text"
          placeholder="Filter by rocket name"
          value={filterRocket}
          onChange={(e) => setFilterRocket(e.target.value)}
          className="p-2 rounded-md text-black"
        />
        <button
          onClick={() => setFilterRocket("")}
          className="bg-amber-300 text-black px-3 py-1 rounded-md hover:bg-amber-400 transition"
        >
          Reset
        </button>
      </div>

      {/* Past Launches */}
      <h2 className="text-3xl font-bold text-amber-300 mt-8 mb-4">
        Past Launches
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-black/50 rounded-lg shadow-lg">
          <thead>
            <tr className="text-left border-b border-gray-600">
              <th className="px-4 py-3 text-amber-300">Image</th>
              <th className="px-4 py-3 text-amber-300">Name</th>
              <th className="px-4 py-3 text-amber-300">Rocket</th>
              <th className="px-4 py-3 text-amber-300">Date</th>
              <th className="px-4 py-3 text-amber-300">Status</th>
              <th className="px-4 py-3 text-amber-300">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredLaunches(pastLaunches).map((launch, idx) => (
              <tr
                key={idx}
                onClick={() => navigate(`/launches/${toSlug(launch.name)}`)}
                className="border-b border-gray-700 hover:bg-black/70 transition cursor-pointer"
              >
                <td className="px-4 py-3">
                  <img
                    src={launch.image}
                    alt={launch.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3">{launch.name}</td>
                <td className="px-4 py-3">{launch.rocket}</td>
                <td className="px-4 py-3">
                  {new Date(launch.date_utc).toLocaleString()}
                </td>
                <td
                  className="px-4 py-3 font-semibold"
                  style={{ color: launch.success ? "limegreen" : "red" }}
                >
                  {launch.success ? "Success ✅" : "Failed ❌"}
                </td>
                <td className="px-4 py-3">{launch.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upcoming Launches */}
      <h2 className="text-3xl font-bold text-yellow-400 mt-8 mb-2">
        Upcoming Launches
      </h2>
      <p className="text-gray-300 mb-4">
        These are the planned upcoming missions of SpaceX.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black/50 rounded-lg shadow-lg">
          <thead>
            <tr className="text-left border-b border-gray-600">
              <th className="px-4 py-3 text-amber-300">Image</th>
              <th className="px-4 py-3 text-amber-300">Name</th>
              <th className="px-4 py-3 text-amber-300">Rocket</th>
              <th className="px-4 py-3 text-amber-300">Date</th>
              <th className="px-4 py-3 text-amber-300">Status</th>
              <th className="px-4 py-3 text-amber-300">Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredLaunches(upcomingLaunches).map((launch, idx) => (
              <tr
                key={idx}
                onClick={() => navigate(`/launches/${toSlug(launch.name)}`)}
                className="border-b border-gray-700 hover:bg-black/70 transition cursor-pointer"
              >
                <td className="px-4 py-3">
                  <img
                    src={launch.image}
                    alt={launch.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3">{launch.name}</td>
                <td className="px-4 py-3">{launch.rocket}</td>
                <td className="px-4 py-3">
                  {new Date(launch.date_utc).toLocaleString()}
                </td>
                <td className="px-4 py-3 font-semibold text-yellow-400">
                  Upcoming ⏳
                </td>
                <td className="px-4 py-3">{launch.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Launches;
