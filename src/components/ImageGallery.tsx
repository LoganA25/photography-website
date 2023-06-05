import React, { useEffect, useState } from "react";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageUrls: string[] = [
  "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/FirstSet%2FIMG_1157.jpg?alt=media&token=06b66995-61a9-4b01-add2-f9c72384e43c&_gl=1*uzs8sn*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NTc0OTkwMC44LjEuMTY4NTc0OTk0MC4wLjAuMA..",
  "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/FirstSet%2FIMG_1127.jpg?alt=media&token=28a585cd-3580-4144-a547-8b2f071ba266&_gl=1*7uetf3*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NTc0OTkwMC44LjEuMTY4NTc0OTk2Ni4wLjAuMA..",
];

interface ImageDimension {
  url: string;
  width: number;
  height: number;
}

function ImageGallery({ columnCount = 3 }: { columnCount?: number }) {
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
  }, []); // Empty dependency array ensures the effect runs only once

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
                          loading="lazy"
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
