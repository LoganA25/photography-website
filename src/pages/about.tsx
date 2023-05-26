import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
    return (
      <>
        <div className="min-h-screen bg-[#FFF] text-[#2D2D2D]">
          <Header />
          <div className="flex flex-col md:flex-row md:p-24 items-start justify-center">
            <div className="md:w-1/2" style={{ maxWidth: '525px' }}>
              <Image
                src="/FirstSet/img_2750.jpg"
                alt="Mandy"
                width={500}
                height={500}
                className="max-w-full"
              />
            </div>
            <div className="max-w-xl px-4 sm:px-6 py-4 sm:py-0">
              <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold mb-4">
                About Me
              </h1>
              <p className="text-base sm:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nulla est
                incidunt quaerat culpa quibusdam suscipit non maxime unde soluta
                perferendis voluptatum voluptatibus voluptatem eum molestias
                aliquam possimus, molestiae dignissimos blanditiis?
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
