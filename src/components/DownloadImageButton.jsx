import { useState } from "react";
import { Download } from "lucide-react";

const DownloadImageButton = ({ id }) => {
  const [imageUrl, _setImageUrl] = useState(
    `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`
  );

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
      className="absolute bottom-2 right-2 inline-flex items-center rounded-md border border-b-2 border-neutral-700 bg-neutral-800 p-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-neutral-700"
      onClick={handleDownload}
    >
      <Download size={16} />
      <span className="ml-2 text-xs">Download image</span>
    </button>
  );
};

export default DownloadImageButton;
