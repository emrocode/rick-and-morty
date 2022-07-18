import {
  GlobeIcon,
  LocationMarkerIcon,
  HandIcon,
  AtSymbolIcon,
} from "@heroicons/react/outline";

export default function Character({ item }) {
  return (
    <article className="grid-cols-auto grid sm:grid-cols-2">
      <figure>
        <img src={item.image} className="h-[100%] w-full object-cover" />
      </figure>
      <div className="bg-base02 p-3 text-left text-base04">
        <h2 className="bg-base01 p-2 text-center font-semibold text-base04">
          {item.name}
        </h2>
        <ul>
          <li className="break-words p-2">
            <AtSymbolIcon className="mr-2 inline-flex h-5 w-5 align-text-top" />
            {item.species}
          </li>
          <li className="break-words bg-base03 p-2">
            <HandIcon className="mr-2 inline-flex h-5 w-5 align-text-top" />
            {item.gender}
          </li>
          <li className="break-words p-2">
            <GlobeIcon className="mr-2 inline-flex h-5 w-5 align-text-top" />
            {item.origin.name}
          </li>
          <li className="break-words bg-base03 p-2">
            <LocationMarkerIcon className="mr-2 inline-flex h-5 w-5 align-text-top" />
            {item.location.name}
          </li>
        </ul>
      </div>
    </article>
  );
}
