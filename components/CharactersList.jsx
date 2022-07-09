import { useState, useEffect } from 'react';
import Character from './Character';
import Navigation from './Navigation';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await res.json();
      setLoading(false);
      setCharacters(data.results);
    }

    getData();
  }, [page]);

  return (
    <div className="w-[90%] mx-auto">
      <Navigation page={page} setPage={setPage} />
      {loading ? (
        <p className="px-4 text-center">Loading...</p>
      ) : (
        <>
          <div className="grid gap-4 auto-cols-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
