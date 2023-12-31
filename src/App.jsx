import React, { useEffect, useState, useLayoutEffect } from "react";
import Home from "./pages/HomePage/Home";
import { Route, Routes } from "react-router";
import MangaPage from "./pages/MangaPage/MangaPage";
import Header from "./components/Header/Header";
import AuthPage from "./pages/AuthPage/AuthPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import UserPage from "./pages/UserPage/UserPage";
import ChapterPage from "./pages/ChapterPage/ChapterPage";
import CreateMangaPage from "./pages/CreateMangaPage/CreateMangaPage";
import CreateChapterPage from "./pages/CreateChapterPage/CreateChapterPage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";

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
        <Route path="/authorization" element={<AuthPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route
          path={"/manga/:id/chapters/:idChapter"}
          element={<ChapterPage />}
        />
        <Route path="/create" element={<CreateMangaPage />} />
        <Route
          path="/manga/:id/createChapter"
          element={<CreateChapterPage />}
        />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:tag" element={<CatalogPage />} />
      </Routes>
    </>
  );
}

export default App;
