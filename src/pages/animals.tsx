import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import { useImageUrls } from "@/hooks/useImageUrls";

function Animals() {
  const imageUrls = useImageUrls("Animals");
  console.log(imageUrls);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF]">
      <Header />
      <div className="flex-grow">
        <ImageGallery imageUrls={imageUrls} />
      </div>
      <Footer />
    </div>
  );
}

export default Animals;
