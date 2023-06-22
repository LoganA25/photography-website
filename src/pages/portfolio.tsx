import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <div className="min-h-screen bg-[#FFF]">
        <Header />
        <div className="flex items-center justify-center">
          <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3">
            <div className="relative">
              <div className="absolute inset-0 hover:cursor-pointer hover:bg-[rgba(255,255,255,.30)] h-full w-full"></div>
                <Image
                  src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  height={500}
                  width={500}
                />
              <div className="absolute top-3 left-5">
                <span className="text-white text-2xl font-bold">
                  Sample Text
                </span>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
