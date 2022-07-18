import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Navigation(props) {
  return (
    <div className="flex items-center justify-between bg-white py-4">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          className="relative inline-flex items-center rounded-md rounded-l bg-base01 px-6 py-2 text-sm font-medium text-white"
          onClick={() => props.setPage(props.page - 1 ? props.page - 1 : 1)}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md rounded-l bg-base01 px-6 py-2 text-sm font-medium text-white"
          onClick={() => props.setPage(props.page + 1)}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-gray-700 hover:text-base02">
            Page: {props.page}
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              type="button"
              className="relative inline-flex items-center rounded-l bg-base01 px-2 py-2 hover:bg-base02"
              onClick={() => props.setPage(props.page - 1 ? props.page - 1 : 1)}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon
                className="h-5 w-5 fill-base04"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="relative inline-flex items-center border-l border-base02 bg-base01 px-4 py-2 text-base04 hover:bg-base02"
              onClick={() => props.setPage(1)}
            >
              1
            </button>
            <button
              type="button"
              className="relative inline-flex items-center border-l border-base02 bg-base01 px-4 py-2 text-base04 hover:bg-base02"
              onClick={() => props.setPage(2)}
            >
              2
            </button>
            <button
              type="button"
              className="relative inline-flex items-center border-l border-base02 bg-base01 px-4 py-2 text-base04 hover:bg-base02"
              onClick={() => props.setPage(3)}
            >
              3
            </button>
            <span className="relative inline-flex cursor-pointer items-center border-l border-base02 bg-base01 px-4 py-2 text-base04 hover:bg-base02">
              ...
            </span>
            <button
              type="button"
              className="relative inline-flex items-center border-l border-base02 bg-base01 px-4 py-2 text-base04 hover:bg-base02"
              onClick={() => props.setPage(28)}
            >
              28
            </button>
            <button
              type="button"
              className="relative inline-flex items-center border-l border-base02 bg-base01 px-4 py-2 text-base04 hover:bg-base02"
              onClick={() => props.setPage(29)}
            >
              29
            </button>
            <button
              type="button"
              className="relative inline-flex items-center border-l border-r border-base02 bg-base01 px-4 py-2 text-base04 hover:bg-base02"
              onClick={() => props.setPage(30)}
            >
              30
            </button>
            <button
              type="button"
              className="relative inline-flex items-center rounded-r border-l border-base02 bg-base01 px-2 py-2 hover:bg-base02"
              onClick={() => props.setPage(props.page + 1)}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon
                className="h-5 w-5 fill-base04"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
