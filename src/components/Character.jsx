export default function Character({ item }) {
  return (
    <article
      className="cursor-default rounded-sm bg-white p-4 shadow-sm"
      key={item.id}
    >
      <figure className="overflow-hidden rounded-sm bg-gray-100">
        <img
          src={item.image}
          className="block h-[240px] w-full object-cover object-center"
          alt={item.name}
          loading="lazy"
        />
      </figure>
      <span className="block w-full h-[1px] my-4 bg-neutral-200"></span>
      <section className="flex flex-col gap-y-2 px-1 text-neutral-800">
        <h2 className="text-xl font-bold leading-none">{item.name}</h2>
        <div className="flex w-full items-center gap-x-2 text-sm capitalize">
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
          <span className="text-sm text-neutral-700">
            {item.status} - {item.species}
          </span>
        </div>
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
