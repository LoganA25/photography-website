import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import cows from "/public/cows.jpeg";
import dog1 from "/public/dogs.jpeg";
import dog2 from "/public/dogs2.jpeg";
import dog3 from "/public/dog3.jpeg";

function Animals() {
  const imageUrls = [dog1.src, dog2.src, dog3.src, cows.src];

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
