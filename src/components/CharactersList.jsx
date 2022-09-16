import { useState, useEffect } from "react";
import { Navigation } from "../components";
import { Character } from "../components";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async function getData() {
      await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((response) => response.json())
        .then((json) => {
          setCharacters(json.results);
        })
        .then(() => {
          setLoading(false);
        });
    })();
  }, [page]);

  return (
    <div>
      <Navigation page={page} setPage={setPage} />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-auto gap-4">
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
