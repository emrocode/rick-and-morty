export default function Character({ item }) {
  return (
    <article
      className="cursor-default select-none overflow-hidden rounded-md bg-white p-4 shadow-sm"
      key={item.id}
    >
      <figure className="relative overflow-hidden rounded-md">
        <img
          src={item.image}
          className="block h-[300px] w-full object-cover object-center"
          alt={item.name}
        />
        <figcaption className="absolute bottom-0 flex w-full items-center gap-x-2 bg-neutral-800 px-3 py-2 text-sm capitalize text-white">
          <div className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                (item.status.toLowerCase() === "unknown" && "bg-[#A8A8A8]") ||
                (item.status.toLowerCase() === "alive" && "bg-[#8FB073]") ||
                (item.status.toLowerCase() === "dead" && "bg-[#B9535D]")
              }`}
            ></span>
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                (item.status.toLowerCase() === "unknown" && "bg-[#A8A8A8]") ||
                (item.status.toLowerCase() === "alive" && "bg-[#8FB073]") ||
                (item.status.toLowerCase() === "dead" && "bg-[#B9535D]")
              }`}
            ></span>
          </div>
          <span className="leading-4">
            {item.status} - {item.species}
          </span>
        </figcaption>
      </figure>
      <section className="flex flex-col gap-y-2 px-1 pt-3 text-neutral-800">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <div className="text-sm">
          <span className="block font-bold text-neutral-700">Origin:</span>
          <span className="block capitalize">{item.origin.name}</span>
        </div>
        <div className="text-sm">
          <span className="block font-bold text-neutral-700">
            Last known location:
          </span>
          <span className="block capitalize">{item.location.name}</span>
        </div>
      </section>
    </article>
  );
}
