import { useState, useEffect } from "react";
import { Navigation } from "../components";
import { Character } from "../components";
import { Footer } from "../components";

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
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    })();
  }, [page]);

  return (
    <main>
      <Navigation page={page} setPage={setPage} />
      {loading ? (
        <div className="absolute top-0 left-0 flex h-screen w-full select-none items-center justify-center p-4">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white-100 px-4 py-2 text-black-200"
          >
            <svg
              className="-ml-1 mr-3 h-5 w-5 animate-spin text-black-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Loading...</span>
          </button>
        </div>
      ) : (
        <>
          <section className="mx-auto w-[90%] max-w-[1440px]">
            <div className="my-4 grid grid-cols-auto gap-4">
              {characters.map((item) => (
                <Character item={item} key={item.id} />
              ))}
            </div>
          </section>
          <Footer />
        </>
      )}
    </main>
  );
}
