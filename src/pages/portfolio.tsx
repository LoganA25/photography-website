import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { seaweed_script } from "../../public/fonts/custom-fonts";

export default function Portfolio() {
  return (
    <>
      <div className="min-h-screen bg-[#FFF]">
        <div className="mb-12">
          <Header />
        </div>
        <div className={seaweed_script.className}>
          <div className="flex items-center justify-center">
            <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-40 gap-y-24">
              <div className="relative flex w-96 flex-col bg-[#E9EFF0] text-[#7A7A7A] shadow-[0_35px_35px_rgba(0,0,0,0.5)] rotate-12">
                <div className="relative mt-9 mx-9 h-72 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-8 text-center">
                  <h4 className="block text-4xl">Wedding & Engagement</h4>
                </div>
              </div>
              <div className="relative flex w-96 flex-col bg-[#E9EFF0]  text-[#7A7A7A] shadow-[0_35px_35px_rgba(0,0,0,0.5)] -rotate-6">
                <div className="relative mt-9 mx-9 h-72 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-8 text-center">
                  <h4 className="block text-4xl">Wedding & Engagement</h4>
                </div>
              </div>
              <div className="relative flex w-96 flex-col bg-[#E9EFF0] bg-clip-border text-[#7A7A7A] shadow-[0_35px_35px_rgba(0,0,0,0.5)] rotate-6">
                <div className="relative mt-9 mx-9 h-72 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-8 text-center">
                  <h4 className="block text-4xl">Wedding & Engagement</h4>
                </div>
              </div>
              <div className="relative flex w-96 flex-col bg-[#E9EFF0] bg-clip-border text-[#7A7A7A] shadow-[0_35px_35px_rgba(0,0,0,0.5)] -rotate-12">
                <div className="relative mt-9 mx-9 h-72 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-8 text-center">
                  <h4 className="block text-4xl">Wedding & Engagement</h4>
                </div>
              </div>
              <div className="relative flex w-96 flex-col bg-[#E9EFF0] bg-clip-border text-[#7A7A7A] shadow-[0_35px_35px_rgba(0,0,0,0.5)] rotate-6">
                <div className="relative mt-9 mx-9 h-72 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    height={500}
                    width={500}
                  />
                </div>
                <div className="p-8 text-center">
                  <h4 className="block text-4xl">Wedding & Engagement</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
