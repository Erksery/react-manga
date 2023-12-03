import React from "react";
import { useParams } from "react-router";
import { useGetActiveManga } from "../../hooks/useGetActiveManga";

function MangaPage() {
  const { dataActiveManga, isLoadingActiveData } = useGetActiveManga();

  return (
    <div>
      {dataActiveManga.idManga} | {dataActiveManga.titleManga}
    </div>
  );
}

export default MangaPage;
