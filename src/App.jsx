import React, { useEffect, useState } from "react";
import Home from "./pages/HomePage/Home";
import { Route, Routes } from "react-router";
import MangaPage from "./pages/MangaPage/MangaPage";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    document.documentElement.dataset.theme = saveTheme;
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleToggleTheme={handleToggleTheme} />}
      />
      <Route path="/manga" element={<MangaPage />} />
    </Routes>
  );
}

export default App;
