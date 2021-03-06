function Navigation(props) {
  return (
    <div className="flex items-center justify-between bg-white-100 py-4">
      <div>
        <p className="text-sm font-bold text-black-300 sm:hidden">
          Page: {props.page}
        </p>
      </div>
      <div className="flex sm:hidden">
        <button
          type="button"
          className="relative inline-flex items-center rounded-md rounded-full bg-black-200 px-6 py-2 text-sm font-medium text-white-100"
          onClick={() => props.setPage(props.page > 1 ? props.page - 1 : 1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="relative ml-2 inline-flex items-center rounded-md rounded-full bg-black-200 px-6 py-2 text-sm font-medium text-white-100"
          onClick={() => props.setPage(props.page < 42 ? props.page + 1 : 42)}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-black-300">Page: {props.page}</p>
        </div>
        <div>
          <nav
            className="relative inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-l border border-black-100 bg-black-200 p-2 hover:bg-black-300"
              onClick={() => props.setPage(props.page > 1 ? props.page - 1 : 1)}
            >
              <span className="sr-only">Previous</span>
              <i
                className="bx bx-chevron-left text-[22px] text-white-300"
                aria-hidden="true"
              ></i>
            </button>
            <button
              type="button"
              className={
                props.page == 1
                  ? "relative inline-flex items-center border border-black-100 bg-black-300 px-4 py-2 text-white-300 hover:bg-black-300"
                  : "relative inline-flex items-center border border-black-100 bg-black-200 px-4 py-2 text-white-300 hover:bg-black-300"
              }
              onClick={() => props.setPage(1)}
            >
              1
            </button>
            <button
              type="button"
              className={
                props.page == 2
                  ? "relative inline-flex items-center border border-black-100 bg-black-300 px-4 py-2 text-white-300 hover:bg-black-300"
                  : "relative inline-flex items-center border border-black-100 bg-black-200 px-4 py-2 text-white-300 hover:bg-black-300"
              }
              onClick={() => props.setPage(2)}
            >
              2
            </button>
            <button
              type="button"
              className={
                props.page == 3
                  ? "relative inline-flex items-center border border-black-100 bg-black-300 px-4 py-2 text-white-300 hover:bg-black-300"
                  : "relative inline-flex items-center border border-black-100 bg-black-200 px-4 py-2 text-white-300 hover:bg-black-300"
              }
              onClick={() => props.setPage(3)}
            >
              3
            </button>

            <button
              type="button"
              className={
                props.page == 4
                  ? "relative inline-flex items-center border border-black-100 bg-black-300 px-4 py-2 text-white-300 hover:bg-black-300"
                  : "relative inline-flex items-center border border-black-100 bg-black-200 px-4 py-2 text-white-300 hover:bg-black-300"
              }
              onClick={() => props.setPage(4)}
            >
              4
            </button>
            <button
              type="button"
              className={
                props.page == 5
                  ? "relative inline-flex items-center border border-black-100 bg-black-300 px-4 py-2 text-white-300 hover:bg-black-300"
                  : "relative inline-flex items-center border border-black-100 bg-black-200 px-4 py-2 text-white-300 hover:bg-black-300"
              }
              onClick={() => props.setPage(5)}
            >
              5
            </button>
            <span className="relative inline-flex cursor-pointer items-center border border-black-100 bg-black-200 px-4 py-2 text-white-300 hover:bg-black-300">
              ...
            </span>
            <button
              type="button"
              className={
                props.page == 42
                  ? "relative inline-flex items-center border border-black-100 bg-black-300 px-4 py-2 text-white-300 hover:bg-black-300"
                  : "relative inline-flex items-center border border-black-100 bg-black-200 px-4 py-2 text-white-300 hover:bg-black-300"
              }
              onClick={() => props.setPage(42)}
            >
              42
            </button>
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-r border border-black-100 bg-black-200 p-2 hover:bg-black-300"
              onClick={() =>
                props.setPage(props.page < 42 ? props.page + 1 : 42)
              }
            >
              <span className="sr-only">Next</span>
              <i
                className="bx bx-chevron-right text-[22px] text-white-300"
                aria-hidden="true"
              ></i>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
