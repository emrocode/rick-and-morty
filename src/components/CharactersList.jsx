import { useState, useEffect } from "react";
import Character from "./Character";
import Navigation from "./Navigation";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => response.json())
        .then((json) => {
          setCharacters(json.results);
        })
        .then(() => {
          setLoading(false);
        });
    }

    getData();
  }, [page]);

  return (
    <div className="mx-auto w-[90%]">
      <Navigation page={page} setPage={setPage} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-none gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {characters.map((item) => (
              <Character item={item} key={item.id} />
            ))}
          </div>
          <Navigation page={page} setPage={setPage} />
        </>
      )}
    </div>
  );
}
