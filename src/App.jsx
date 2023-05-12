import React, { useState } from "react";
import "./App.css";
import BeastDetails from "./components/BeastDetails";
import BeastPage from "./components/BeastPage";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SearchBar from "./components/SearchBar";
import BottomFooter from "./components/BottomFooter";
import { Route, Routes } from "react-router";
/* import BossList from "./components/BossList"; */
import BossesPage from "./components/BossesPage";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");

  function handleRegionClick(region) {
    console.log("clickregion", region);
    setSelectedRegion(region);
  }

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/BossesPage" element={<BossesPage />}></Route>
          <Route element="/BeastPage">
            <Route path="/BeastPage" element={<BeastPage />} />
            <Route path=":id" element={<BeastDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
