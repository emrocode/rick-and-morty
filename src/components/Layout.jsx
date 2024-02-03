import { Outlet } from "react-router-dom";
import { useFetch } from "../hooks";
import Navigation from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  const data = useFetch("https://rickandmortyapi.com/api/character");
  const isLoaded = data.loading === false;

  return (
    <>
      <Navigation page={data.page} setPage={data.setPage} />
      <Outlet context={data} />
      {isLoaded && <Footer />}
    </>
  );
}
