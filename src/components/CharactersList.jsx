import { Character } from "../components";
import Loader from "./Loader";

export default function CharacterList({ data }) {
  return (
    <>
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
        </>
      )}
    </>
  );
}
