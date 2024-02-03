import { NavLink, useLocation } from "react-router-dom";

export default function Navigation(props) {
  const location = useLocation();
  const isHome = location.pathname === "/rick-and-morty/";

  return (
    <header className="sticky top-0 z-10 flex min-h-20 select-none bg-white py-4 shadow-sm">
      <nav className="mx-auto flex w-[90%] max-w-[1440px] flex-wrap items-center justify-between gap-y-2">
        <NavLink
          to="/rick-and-morty/"
          data-small="r&m"
          className="text-base font-bold uppercase before:content-['\005B'] after:content-['\005D']"
          reloadDocument={isHome}
        >
          rick & morty
        </NavLink>
        <div className="flex items-center gap-x-4">
          <span className="text-sm font-bold text-neutral-800">
            Page: {props.page} of 42
          </span>
          <hr className="block h-8 w-px bg-neutral-200" />
          <div className="flex gap-x-2">
            <button
              className="relative inline-flex items-center rounded-md border bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-700 disabled:bg-neutral-800 disabled:opacity-60"
              onClick={() =>
                props.setPage((props.page > 1 && props.page - 1) || 1)
              }
              disabled={props.page <= 1}
            >
              Prev
            </button>
            <button
              className="relative inline-flex items-center rounded-md border bg-neutral-800 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-700 disabled:bg-neutral-800 disabled:opacity-60"
              onClick={() =>
                props.setPage((props.page < 42 && props.page + 1) || 42)
              }
              disabled={props.page >= 42}
            >
              Next
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
