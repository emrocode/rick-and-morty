export default function Navigation(props) {
  return (
    <header className="sticky top-0 z-10 flex h-20 select-none bg-white-100 shadow-sm">
      <nav className="mx-auto flex w-[90%] max-w-[1440px] items-center justify-between">
        <span className="block text-sm font-bold text-black-300">
          Page: {props.page} of 42
        </span>
        <div className="flex gap-x-2">
          <button
            className="relative inline-flex items-center rounded-md border bg-black-300 px-5 py-2 text-sm font-medium text-white-200"
            onClick={() =>
              props.setPage((props.page >= 1 && props.page - 1) || 1)
            }
          >
            Previous
          </button>
          <button
            className="relative inline-flex items-center rounded-md border bg-black-300 px-5 py-2 text-sm font-medium text-white-200"
            onClick={() =>
              props.setPage((props.page < 42 && props.page + 1) || 42)
            }
          >
            Next
          </button>
        </div>
      </nav>
    </header>
  );
}
