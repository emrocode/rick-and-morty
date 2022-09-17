export default function Character({ item }) {
  return (
    <article
      className="cursor-default overflow-hidden rounded-sm border-4 border-black-300 bg-black-100"
      key={item.id}
    >
      <figure className="overflow-hidden border-b-4 border-black-300">
        <img
          src={item.image}
          className="block h-[300px] w-full object-cover object-center"
          alt={item.name}
        />
      </figure>
      <section className="flex flex-col gap-y-2 p-4 text-white-100">
        <h2 className="text-xl font-bold">{item.name}</h2>
        <div className="flex items-center gap-x-2 text-sm capitalize">
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
        </div>
        <div className="text-sm">
          <span className="block font-medium text-white-300">Origin:</span>
          <span className="block capitalize">{item.origin.name}</span>
        </div>
        <div className="text-sm">
          <span className="block font-medium text-white-300">
            Last known location:
          </span>
          <span className="block capitalize">{item.location.name}</span>
        </div>
      </section>
    </article>
  );
}
