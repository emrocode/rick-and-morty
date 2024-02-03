import { useOutletContext } from "react-router-dom";
import { CharactersList } from "../components";

export default function Home() {
  const data = useOutletContext();

  return (
    <section>
      <CharactersList data={data} />
    </section>
  );
}
