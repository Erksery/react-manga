import React, { useEffect, useState, useLayoutEffect } from "react";
import Home from "./pages/HomePage/Home";
import { Route, Routes } from "react-router";
import MangaPage from "./pages/MangaPage/MangaPage";
import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState("light");

  useLayoutEffect(() => {
    const saveTheme = localStorage.getItem("theme");
    document.documentElement.dataset.theme = theme;
    setTheme(saveTheme);
  }, [theme]);

  const handleToggleTheme = () => {
    const newT = theme === "light" ? "dark" : "light";
    setTheme(newT);
    localStorage.setItem("theme", newT);
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
