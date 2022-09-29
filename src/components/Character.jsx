export default function Character({ item }) {
  return (
    <article
      className=" cursor-default select-none overflow-hidden rounded-md bg-white-100 p-4 shadow-sm"
      key={item.id}
    >
      <figure className="relative overflow-hidden rounded-md">
        <img
          src={item.image}
          className="block h-[300px] w-full object-cover object-center"
          alt={item.name}
        />
        <figcaption className="absolute bottom-0 flex w-full items-center gap-x-2 bg-black-300 px-3 py-2 text-sm capitalize text-white-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-2.5 w-2.5"
            viewBox="0 0 16 16"
            fill={
              (item.status.toLowerCase() === "unknown" && "#BCBCBC") ||
              (item.status.toLowerCase() === "alive" && "#A3BE8C") ||
              (item.status.toLowerCase() === "dead" && "#BF616A")
            }
          >
            <circle cx="8" cy="8" r="8" />
          </svg>
          <span className="leading-4">
            {item.status} - {item.species}
          </span>
        </figcaption>
      </figure>
      <section className="flex flex-col gap-y-2 px-1 pt-3 text-black-200">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <div className="text-sm">
          <span className="block font-bold text-black-100">Origin:</span>
          <span className="block capitalize">{item.origin.name}</span>
        </div>
        <div className="text-sm">
          <span className="block font-bold text-black-100">
            Last known location:
          </span>
          <span className="block capitalize">{item.location.name}</span>
        </div>
      </section>
    </article>
  );
}
