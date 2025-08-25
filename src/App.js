import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import History from "./Pages/History";
import Launches from "./Pages/Launches";
import Rockets from "./Pages/Rockets";
import Falcon9 from "./Pages/Falcon9";
import Falcon1 from "./Pages/Falcon1";
import Falconheavy from "./Pages/Falconheavy";
import Starship from "./Pages/Starship";
import Home from "./Pages/Home";
import Falcondetail from "./Pages/Falcondetail";
import Falcon9detail from "./Pages/Falcon9detail";
import Cotsdemodetail from "./Pages/Cotsdemodetail";
import Falconheavydetail from "./Pages/Falconheavydetail";
import Dragon8detail from "./Pages/Dragon8detail";
import Starlink62detail from "./Pages/Starlink62detail";
import Axiommission3detail from "./Pages/Axiommission3detail";
import CRS28detail from "./Pages/CRS28detail";
import Hisfalcon from "./Pages/Hisfalcon";
import Hisdragon from "./Pages/Hisdragon";
import Dragcap from "./Pages/Dragcap";
import Firstfalc from "./Pages/Firstfalc";
import Successfal from "./Pages/Successfal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ✅ Only one index route */}
          <Route index element={<Home />} /> 

          <Route path="history" element={<History />} />
          <Route path="launches" element={<Launches />} />
          <Route path="rockets" element={<Rockets />} />
          <Route path="rockets/falcon9" element={<Falcon9 />} />
          <Route path="rockets/falcon1" element={<Falcon1 />} />
          <Route path="rockets/falconheavy" element={<Falconheavy />} />
          <Route path="rockets/starship" element={<Starship />} />
          <Route path="launches/falconsat" element={<Falcondetail />} />
          <Route path="/launches/falcon-9-test-flight" element={<Falcon9detail />} />
          <Route path="/launches/cots-demo-flight-1" element={<Cotsdemodetail />} />
          <Route path="/launches/falcon-heavy-demo" element={<Falconheavydetail />} />
          <Route path="/launches/dragon-crs-8" element={<Dragon8detail />} />
          <Route path="/launches/starlink-6-2" element={<Starlink62detail />} />
          <Route path="/launches/axiom-mission-3" element={<Axiommission3detail/>} />
          <Route path="/launches/commercial-resupply-service-28" element={<CRS28detail />} />
          <Route path="/history/falcon-orbit" element={<Hisfalcon />} />
          <Route path="/history/dragon-launch" element={<Hisdragon />} />
          <Route path="/history/dragon-iss-berth" element={<Dragcap />} />
          <Route path="/history/falcon9-gto" element={<Firstfalc/>} />
          <Route path="/history/falcon9-landing" element={<Successfal/>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
