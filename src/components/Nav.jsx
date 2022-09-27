import ReactPaginate from "react-paginate";

export default function Navigation(props) {
  const pageCount = 42;
  const handlePageChange = (e) => props.setPage(e.selected + 1);

  return (
    <header className="sticky top-0 z-10 flex h-24 select-none bg-white-100 shadow-sm">
      <nav className="mx-auto flex w-[90%] max-w-[1440px] items-center justify-between">
        <span className="block text-sm font-bold text-black-300">
          Page: {props.page} of {pageCount}
        </span>
        {/* Mobile navigation */}
        <div className="flex gap-x-2 sm:hidden">
          <button
            className="relative inline-flex items-center rounded-full border bg-black-300 px-5 py-2 text-sm font-medium text-white-200"
            onClick={() =>
              props.setPage((props.page > 1 && props.page - 1) || 1)
            }
          >
            Previous
          </button>
          <button
            className="relative inline-flex items-center rounded-full border bg-black-300 px-5 py-2 text-sm font-medium text-white-200"
            onClick={() =>
              props.setPage((props.page < 42 && props.page + 1) || 42)
            }
          >
            Next
          </button>
        </div>
        {/* Desktop pagination */}
        <ReactPaginate
          containerClassName="hidden md:inline-flex isolate -space-x-px rounded-sm shadow-sm"
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          renderOnZeroPageCount={null}
          onPageChange={handlePageChange}
          pageClassName="inline-flex"
          pageLinkClassName="relative inline-flex items-center border border-black-300 bg-black-100 px-4 py-3 text-sm font-medium text-white-200 focus:z-20"
          previousLinkClassName="relative inline-flex items-center rounded-l-sm border border-black-300 bg-black-100 px-3 py-3 text-sm font-medium text-white-200 focus:z-20"
          breakLabel="..."
          activeLinkClassName="bg-black-200"
          breakLinkClassName="relative inline-flex items-center border border-black-300 bg-black-100 px-4 py-3 text-sm font-medium text-white-200 focus:z-20"
          nextLinkClassName="relative inline-flex items-center rounded-r-sm border border-black-300 bg-black-100 px-3 py-3 text-sm font-medium text-white-200 focus:z-20"
        />
      </nav>
    </header>
  );
}
