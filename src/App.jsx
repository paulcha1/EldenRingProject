import React, { useState } from "react";
import "./App.css";
import BeastDetails from "./components/BeastDetails";
import BeastPage from "./components/BeastPage";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BottomFooter from "./components/BottomFooter";
import { Route, Routes } from "react-router";
/* import BossList from "./components/BossList"; */
import BossesPage from "./components/BossesPage";

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
          <Route
            path="/BossesPage"
            element={<BossesPage onRegionClick={selectedRegion} />}
          ></Route>
          <Route element="/BeastPage">
            <Route path="/BeastPage" element={<BeastPage />} />
            <Route path="/BeastPage/:id" element={<BeastDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
