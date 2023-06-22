import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-[#FFF] text-[#2D2D2D]  w-full">
        <Header />
        <div className="flex flex-col  md:p-24 items-center justify-center mx-auto">
          <div className="md:w-1/2" style={{ maxWidth: "525px" }}>
            {/* <Image
              src="/FirstSet/img_2750.jpg"
              alt="Mandy"
              width={image.width}
              height={image.height}
              className="max-w-full"
            /> */}
          </div>
          <div className="max-w-xl px-4 sm:px-6 py-4 sm:py-0">
            <div className="container mx-auto p-4">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-lg leading-loose">
                Welcome to Moments by Mandy, your go-to photography service in
                Jonesboro, Arkansas! I'm thrilled to have the opportunity to
                capture your precious memories and showcase the beauty of our
                vibrant community. I'm Mandy Allen, a passionate photographer
                based right here in Jonesboro. With a deep appreciation for the
                natural wonders and unique moments that unfold in our area, I'm
                dedicated to preserving them through my lens.
              </p>
              <p className="text-lg leading-loose">
                Photography has always been more than a hobby for me—it's a way
                to celebrate the charm and character of Jonesboro and its
                people. From the stunning landscapes that surround us to the
                heartfelt connections shared by our community, I aim to capture
                the essence of our city in every frame. As a resident of
                Jonesboro, I understand the significance of our local landmarks,
                events, and traditions. Whether it's a family gathering, a
                milestone celebration, or a local festival, I'm committed to
                documenting these moments so they can be cherished for
                generations to come.
              </p>
              <p className="text-lg leading-loose">
                With a focus on various genres, including portraits, lifestyle,
                and events, I find inspiration in the stories of our residents
                and the unique character of our city. I believe that every
                individual has a story worth telling, and I'm dedicated to
                capturing those narratives authentically and artistically. When
                you choose Moments by Mandy, you can expect a personalized and
                professional experience. I strive to create a comfortable and
                enjoyable environment during our sessions, allowing your true
                personality and emotions to shine through. From our initial
                consultation to the final delivery of your images, I'm committed
                to exceeding your expectations and ensuring your satisfaction.
              </p>
              <p className="text-lg leading-loose">
                As a photographer in Jonesboro, I'm passionate about staying
                connected with our community. I'm constantly seeking
                opportunities to showcase our city's beauty through
                collaborations, community events, and local projects. If you
                have an idea or a special project in mind, I would be honored to
                discuss how we can work together to capture the essence of
                Jonesboro. Thank you for visiting Moments by Mandy and taking
                the time to explore my portfolio, filled with moments captured
                right here in our beloved city. If my work resonates with you
                and you're interested in collaborating for a personal or
                community-based project, I would be delighted to hear from you.
                Please feel free to reach out through the contact page—I can't
                wait to be a part of your Jonesboro story. I'm excited to
                capture your cherished memories and showcase the beauty of our
                community through the art of photography.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
