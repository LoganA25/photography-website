import React, { useEffect, useState } from "react";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

interface ImageGalleryProps {
  columnCount?: number;
  imageUrls: string[];
}

interface ImageDimension {
  url: string;
  width: number;
  height: number;
}

function ImageGallery({ columnCount = 3, imageUrls }: ImageGalleryProps) {
  const [imageDimensions, setImageDimensions] = useState<ImageDimension[]>([]);

  useEffect(() => {
    const fetchImageDimensions = async () => {
      // Create an array of promises to fetch the dimensions of all images
      const dimensionsPromises = imageUrls.map(
        (url): Promise<ImageDimension> =>
          new Promise((resolve, reject) => {
            const imgElement = new window.Image();
            imgElement.onload = () => {
              // When the image is successfully loaded, resolve the promise with the dimensions
              resolve({
                url,
                width: imgElement.naturalWidth,
                height: imgElement.naturalHeight,
              });
            };
            imgElement.onerror = () => {
              reject(new Error(`Failed to load image: ${url}`));
            };
            imgElement.src = url;
          })
      );

      try {
        const dimensions = await Promise.all(dimensionsPromises);
        setImageDimensions(dimensions); // Update the state with the image dimensions
      } catch (error) {
        console.error(error);
      }
    };

    fetchImageDimensions();
  }, [imageUrls]); // Update the effect when imageUrls change

  const imagesPerColumn = Math.ceil(imageUrls.length / columnCount);

  const columns = [...Array(columnCount)].map((_, columnIndex) =>
    imageUrls.slice(
      columnIndex * imagesPerColumn,
      (columnIndex + 1) * imagesPerColumn
    )
  );

  // If image dimensions are not fetched yet, return null or render a loading state
  if (imageDimensions.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl">
      <Gallery>
        <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-x-3">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              {column.map((url, index) => {
                const imageDimension = imageDimensions.find(
                  (dimension) => dimension.url === url
                );

                if (!imageDimension) {
                  return null;
                }

                const { width, height } = imageDimension;

                return (
                  <Item
                    original={url}
                    thumbnail={url}
                    height={height}
                    width={width}
                    key={index}
                  >
                    {({ ref, open }) => (
                      <div
                        ref={ref as React.MutableRefObject<HTMLDivElement>}
                        onClick={open}
                        className="relative overflow-hidden flex flex-grow"
                        style={{ cursor: "pointer" }}
                      >
                        <Image
                          alt=""
                          src={url}
                          height={height}
                          width={width}
                          style={{
                            objectFit: "contain",
                            objectPosition: "top",
                          }}
                        />
                      </div>
                    )}
                  </Item>
                );
              })}
            </div>
          ))}
        </div>
      </Gallery>
    </div>
  );
}

export default ImageGallery;
