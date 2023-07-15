import { useEffect, useState } from "react";
import getImageUrls from "@/components/ImageFolders";

export function useImageUrls(folderName: string) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const urls = await getImageUrls(folderName);
        setImageUrls(urls);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageUrls();
  }, [folderName]);

  return imageUrls;
}
