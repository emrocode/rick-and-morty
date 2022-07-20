function Character({ item }) {
  return (
    <article
      className="flex cursor-default flex-col overflow-hidden rounded bg-black-200"
      key={item.id}
    >
      <img
        src={item.image}
        className="h-[280px] w-full object-cover object-center"
      />
      <div className="p-3 text-white-100">
        <h2 className="text-md break-words rounded bg-black-300 px-4 py-3 font-extrabold text-white-100 sm:text-2xl">
          {item.name}
        </h2>
        <div className="px-2 py-1">
          <p className="my-2 text-sm font-medium capitalize">
            <span
              className={`${item.status === "Alive" ? "text-[#A3BE8C]" : ""} ${
                item.status === "Dead" ? "text-[#BF616A]" : ""
              } ${item.status === "unknown" ? "text-[#BCBCBC]" : ""}`}
            >
              <i className="bx bxs-circle mr-2 text-xs"></i>
            </span>
            {item.status} - {item.species}
          </p>
          <p className="my-2">
            <span className="block font-medium text-[#CECECE]">Origin:</span>
            {item.origin.name}
          </p>
          <p>
            <span className="block font-medium text-[#CECECE]">
              Last known location:
            </span>
            {item.location.name}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Character;
