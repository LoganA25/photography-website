import Image from "next/image";
import img from "../../public/FirstSet/IMG_1127.jpg";
import img2 from "../../public/FirstSet/IMG_1133.jpg";
import img3 from "../../public/FirstSet/IMG_1138.jpg";
import img4 from "../../public/FirstSet/IMG_1157.jpg";
import img5 from "../../public/FirstSet/IMG_1164.jpg";
import img6 from "../../public/FirstSet/IMG_1168.jpg";
import img7 from "../../public/FirstSet/IMG_1187.jpg";
import img8 from "../../public/FirstSet/IMG_1205.jpg";
import img9 from "../../public/FirstSet/IMG_1311.jpg";
import img10 from "../../public/FirstSet/IMG_1386.jpg";
import img11 from "../../public/FirstSet/IMG_1780.jpg";
import img12 from "../../public/FirstSet/IMG_2109.jpg";
import img13 from "../../public/FirstSet/IMG_2126.jpg";
import img14 from "../../public/FirstSet/IMG_2750.jpg";
import img15 from "../../public/FirstSet/IMG_3092.jpg";
import img16 from "../../public/FirstSet/IMG_3177.jpg";
import img17 from "../../public/FirstSet/IMG_3368.jpg";

const imageUrls = [
  img,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
];

function ImageGallery({ columnCount = 3 }) {
  // calculate the number of images per column based on the total number of images and column count
  const imagesPerColumn = Math.ceil(imageUrls.length / columnCount);

  // create an array of empty values with length equal to column count,
  // then map over it to create a new array of columns where each column is an array of images
  const columns = [...Array(columnCount)].map((_, columnIndex) =>
    // slice the imageUrls array to get images for the current column
    imageUrls.slice(
      columnIndex * imagesPerColumn,
      (columnIndex + 1) * imagesPerColumn
    )
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="p-5 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* map over the columns array to create a grid for each column */}
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="grid grid-cols-1 gap-4">
            {/* map over the images in the current column to create an image element for each */}
            {column.map((url, index) => (
              <div
                key={index}
                className="relative overflow-hidden flex flex-grow"
              >
                <Image
                  alt=""
                  src={url.src}
                  width={url.width}
                  height={url.height}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;

//flex-row minimum size of each photo flex grow to fill space
//Possibly make grid with 3 grids in grid -- this worked
//flex-basis tells the item how big it should be before it grows


