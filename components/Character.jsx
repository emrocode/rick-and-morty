export default function Character({ item }) {
  return (
    <article>
      <figure className="relative">
        <img
          src={item.image}
          className="h-auto w-full rounded object-cover sm:object-scale-down"
        />
        <figcaption>
          <h2 className="absolute bottom-0 w-full bg-base01 p-2 text-center font-semibold text-base04">
            {item.name}
          </h2>
        </figcaption>
      </figure>
      <div className="rounded-b bg-base02 p-2 text-left text-base04">
        <ul>
          <li className="rounde truncate whitespace-nowrap bg-base03 py-2 px-4 text-sm">
            {item.species}
          </li>
          <li className="truncate whitespace-nowrap py-2 px-4 text-sm">
            {item.gender}
          </li>
          <li className="rounde truncate whitespace-nowrap bg-base03 py-2 px-4 text-sm">
            {item.origin.name}
          </li>
          <li className="truncate whitespace-nowrap py-2 px-4 text-sm">
            {item.location.name}
          </li>
        </ul>
      </div>
    </article>
  )
}
