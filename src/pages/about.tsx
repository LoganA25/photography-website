import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import AboutMe from "../../public/Photos/AboutMe.jpeg";
import { playfair_display } from "../../public/fonts/custom-fonts";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-[#FFF] text-[#2D2D2D]  w-full">
        <Header />
        <div className="flex flex-row  md:p-24 items-center justify-center mx-auto">
          <div className=" w-96">
            <Image src={AboutMe} alt="Mandy" />
          </div>
          <div className="max-w-xl px-4 sm:px-6 py-4 sm:py-0 items-center justify-center">
            <div className="container mx-auto p-4">
              <div className={playfair_display.className}>
                <h2 className="text-3xl font-bold mb-4 text-center text-[#7A7A7A]">
                  About Me
                </h2>
                <div className="text-sm text-[#7A7A7A] leading-loose divide-y-8 divide-[#7A7A7A]">
                  <p>
                    Welcome to Moments by Mandy, your go-to photography service
                    in Jonesboro, Arkansas! I&apos;m Mandy Allen, a passionate
                    photographer based right here in Jonesboro. Photography has
                    always been more than a hobby for me—it&apos;s a way to
                    celebrate the charm and character of Jonesboro and its
                    people. I aim to capture the essence of our city in every
                    frame, from the stunning landscapes about staying connected
                    with our community and showcasing its to heartfelt
                    connections shared by our community.
                  </p>
                  <p>
                    With a focus on portraits, lifestyle, and events, I believe
                    that every individual has a story worth telling, and
                    I&apos;m dedicated to capturing those narratives
                    authentically and artistically. From our initial
                    consultation to the final delivery of your images, I&apos;m
                    committed to exceeding your expectations and ensuring your
                    satisfaction.
                  </p>
                  <p>
                    As a photographer in Jonesboro, I&apos;m passionate beauty
                    through collaborations, events, and local projects. I would
                    be honored to discuss how we can work together to capture
                    the essence of Jonesboro. Thank you for visiting Moments by
                    Mandy, and I can&apos;t wait to be a part of your Jonesboro
                    story by capturing your cherished memories and showcasing
                    the beauty of our community through the art of photography.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
