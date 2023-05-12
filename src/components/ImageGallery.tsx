import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import img from "../../public/FirstSet/IMG_1127.jpg";
import img2 from "../../public/FirstSet/IMG_1133.jpg";
import img3 from "../../public/FirstSet/IMG_3116.jpg";
import img4 from "../../public/FirstSet/IMG_1157.jpg";
import img5 from "../../public/FirstSet/IMG_1164.jpg";
import img6 from "../../public/FirstSet/IMG_1168.jpg";
import img7 from "../../public/FirstSet/IMG_1187.jpg";
import img8 from "../../public/FirstSet/IMG_1205.jpg";
import img9 from "../../public/FirstSet/IMG_1311.jpg";
import img10 from "../../public/FirstSet/IMG_1386.jpg";
import img11 from "../../public/FirstSet/IMG_1780.jpg";
import img12 from "../../public/FirstSet/IMG_2109.jpg";
import img13 from "../../public/FirstSet/IMG_3026.jpg";
import img14 from "../../public/FirstSet/IMG_2750.jpg";
import img15 from "../../public/FirstSet/IMG_3092.jpg";
import img16 from "../../public/FirstSet/IMG_3177.jpg";
import img17 from "../../public/FirstSet/IMG_3368.jpg";
import img18 from "../../public/FirstSet/IMG_1082.jpg";
import img19 from "../../public/FirstSet/IMG_1118.jpg";
import img20 from "../../public/FirstSet/IMG_1402.jpg";
import img21 from "../../public/FirstSet/IMG_1438.jpg";
import img22 from "../../public/FirstSet/IMG_2143.jpg";
import img23 from "../../public/FirstSet/IMG_2126.jpg";
import img24 from "../../public/FirstSet/IMG_1138.jpg";
import img25 from "../../public/FirstSet/IMG_3514.jpg";
import img26 from "../../public/FirstSet/IMG_3653.jpg";
import img27 from "../../public/FirstSet/IMG_3673.jpg";
import img28 from "../../public/FirstSet/IMG_4020.jpg";
import img29 from "../../public/FirstSet/IMG_4057.jpg";
import img30 from "../../public/FirstSet/IMG_4079.jpg";
import img31 from "../../public/FirstSet/IMG_4137.jpg";

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
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
];

function ImageGallery({ columnCount = 3 }) {
  const imagesPerColumn = Math.ceil(imageUrls.length / columnCount);

  const columns = [...Array(columnCount)].map((_, columnIndex) =>
    imageUrls.slice(
      columnIndex * imagesPerColumn,
      (columnIndex + 1) * imagesPerColumn
    )
  );

  return (
    <div className="mx-auto max-w-7xl">
      <Gallery>
        <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-x-3">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-3">
              {column.map((url, index) => (
                <Item 
                  original={url.src}
                  thumbnail={url.src}
                  width={url.width}
                  height={url.height}
                  key={index}
                >
                  {({ ref, open }) => (
                    <div 
                      ref={ref as React.MutableRefObject<HTMLDivElement>}
                      onClick={open}
                      className="relative overflow-hidden flex flex-grow"
                      style={{ cursor: "pointer"}}
                    >
                      <Image
                        alt=""
                        src={url.src}
                        width={url.width}
                        height={url.height}
                        style={{ objectFit: "contain", objectPosition: "top"}}
                      />
                    </div>
                  )}
                </Item>
              ))}
            </div>
          ))}
        </div>
      </Gallery>
    </div>
  );
}

export default ImageGallery;

//flex-row minimum size of each photo flex grow to fill space
//Possibly make grid with 3 grids in grid -- this worked
//flex-basis tells the item how big it should be before it grows
