import React, { useEffect, useState } from "react";
import Home from "./pages/HomePage/Home";
import { Route, Routes } from "react-router";
import MangaPage from "./pages/MangaPage/MangaPage";
import Header from "./components/Header/Header";

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
    <>
      <Header handleToggleTheme={handleToggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga/:id" element={<MangaPage />} />
        <Route path="/manga" element={<MangaPage />} />
      </Routes>
    </>
  );
}

export default App;
