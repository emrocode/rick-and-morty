
import { Download } from "lucide-react";

const DownloadButton = ({ id }) => {
  const imageUrl = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const link = document.createElement("a");

      link.href = window.URL.createObjectURL(blob);
      link.download = `avatar_${id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <button
      type="button"
      className="absolute bottom-2 right-2 inline-flex w-max items-center rounded bg-neutral-800/60 p-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-700"
      onClick={handleDownload}
      aria-label="Download image"
    >
      <Download size={16} />
    </button>
  );
};

export default DownloadButton;
