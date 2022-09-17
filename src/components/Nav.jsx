export default function Navigation(props) {
  let pageCount = 42;

  return (
    <div className="flex h-20 items-center justify-between">
      <span className="block text-sm font-bold text-black-300">
        Page: {props.page} of {pageCount}
      </span>
      <div className="mx-1 flex rounded-sm border-4 border-black-300">
        <button
          type="button"
          className=" relative inline-flex items-center bg-black-200 px-6 py-2 text-sm font-medium text-white-200 hover:bg-black-300"
          onClick={() => props.setPage((props.page > 1 && props.page - 1) || 1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="relative inline-flex items-center bg-black-100 px-6 py-2 text-sm font-medium text-white-200 hover:bg-black-300"
          onClick={() =>
            props.setPage((props.page < 42 && props.page + 1) || 42)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
