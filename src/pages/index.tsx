import ImageGallery from "@/components/ImageGallery";
import Header from "@/components/Header";

function Home() {
  return (
    <>
      <div className="bg-[#FFE8D6]">
        <Header />
        <div className="container mx-auto p-12">
          <ImageGallery />
        </div>
      </div>
    </>
  );
}

export default Home;
