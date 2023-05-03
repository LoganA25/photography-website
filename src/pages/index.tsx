import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGrid from "@/components/ImageGallery";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#FFE8D6]">
        <Header />
        <div className="container mx-auto">
          <ImageGrid />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
