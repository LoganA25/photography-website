import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#FFF]">
        <Header />
        <div className="container mx-auto">
          <ImageGallery />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
