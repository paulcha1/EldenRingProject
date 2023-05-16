import Homepage from "./components/Homepage";
import React, { useState } from "react";
import "./App.css";
import BeastDetails from "./components/BeastDetails";
import BeastPage from "./components/BeastPage";
import BottomFooter from "./components/BottomFooter";
import { Route, Routes } from "react-router";
import BossesDetails from "./components/BossesDetails";
import BossesPage from "./components/BossesPage";
import "./components/HomepageStyle.css";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");

  function handleRegionClick(region) {
    setSelectedRegion(region);
    console.log("clickregion", region);
  }

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={<Homepage handleRegionClick={handleRegionClick} />}
          />
          <Route>
            <Route
              path="/BossesPage/:region"
              element={<BossesPage onRegionClick={selectedRegion} />}
            />
            <Route path="/BossesPage/:region/:id" element={<BossesDetails />} />
          </Route>
          <Route>
            <Route path="/BeastPage" element={<BeastPage />} />
            <Route path="/BeastPage/:id" element={<BeastDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
