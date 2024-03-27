import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Banner from "../../public/photos/HomePageBanner.png";
import MobileBanner from "../../public/photos/HomePageBannerMobile.png";
import { playfair_display } from "../../public/fonts/custom-fonts";

function Home() {
  return (
    <>
      <div className={playfair_display.className}>
        <div className="min-h-screen bg-[#FFF]">
          <Header />
          <div>
            <div className="hidden sm:block">
              <Image
                src={Banner}
                alt="Moments by Mandy"
                width={3840}
                height={2164}
                style={{ width: "100%" }}
              />
            </div>
            <div className="sm:hidden">
              <Image
                src={MobileBanner}
                alt="Moments by Mandy"
                width={860}
                height={1864}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
