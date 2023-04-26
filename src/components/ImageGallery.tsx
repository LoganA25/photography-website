import Image from "next/image";

const imageUrls = [
  "/FirstSet/IMG_1127.jpg",
  "/FirstSet/IMG_1133.jpg",
  "/FirstSet/IMG_1138.jpg",
  "/FirstSet/IMG_1157.jpg",
  "/FirstSet/IMG_1164.jpg",
  "/FirstSet/IMG_1168.jpg",
  "/FirstSet/IMG_1187.jpg",
  "/FirstSet/IMG_1205.jpg",
  "/FirstSet/IMG_1311.jpg",
  "/FirstSet/IMG_1386.jpg",
  "/FirstSet/IMG_1780.jpg",
  "/FirstSet/IMG_2109.jpg",
  "/FirstSet/IMG_2126.jpg",
  "/FirstSet/IMG_2750.jpg",
  "/FirstSet/IMG_3092.jpg",
  "/FirstSet/IMG_3177.jpg",
  "/FirstSet/IMG_3368.jpg",
];

function ImageGallery() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="p-15 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {imageUrls.map((url, index) => (
          <div key={index} className="relative overflow-hidden">
            <Image
              alt=""
              src={url}
              width={500}
              height={500}
              layout={url.endsWith("jpg") ? "responsive" : "intrinsic"}
              style={{
                objectPosition: url.endsWith("jpg")
                  ? "center bottom"
                  : "center",

                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
