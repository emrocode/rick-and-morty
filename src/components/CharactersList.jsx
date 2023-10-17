import { Navigation } from "../components";
import { Character } from "../components";
import { Footer } from "../components";
import { useFetch } from "../hooks";
import Loader from "./Loader";

export default function CharacterList() {
  const data = useFetch("https://rickandmortyapi.com/api/character");

  return (
    <>
      <Navigation page={data.page} setPage={data.setPage} />
      {data.loading ? (
        <Loader />
      ) : (
        <>
          <section className="mx-auto w-[90%] max-w-[1440px]">
            <div className="my-6 grid grid-cols-auto gap-4">
              {data.characters.map((item) => (
                <Character item={item} key={item.id} />
              ))}
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
}
