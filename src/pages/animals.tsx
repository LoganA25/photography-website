import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";

const Animals = () => {
  const imageUrls = [
    "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/Animals%2FIMG_1127.jpg?alt=media&token=9c4e623b-a5cc-42fc-8e0d-080b9b140c47&_gl=1*1e2vz4l*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NjAyNjc5Ni4xNC4xLjE2ODYwMjg4MTUuMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/Animals%2FIMG_1082.jpg?alt=media&token=5a7e24b8-7cb1-4479-a467-5e0dd58d9f14&_gl=1*1bpx4q6*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NjAyNjc5Ni4xNC4xLjE2ODYwMjg4NjkuMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/Animals%2FIMG_1118.jpg?alt=media&token=ad58a65e-13c5-405c-99f9-f6933321264e&_gl=1*7pv8zc*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NjAyNjc5Ni4xNC4xLjE2ODYwMjg4OTEuMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/Animals%2FIMG_2750.jpg?alt=media&token=9f3f13b8-c8f1-4bb4-b566-b511617f9dcf&_gl=1*1ul1qci*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NjAyNjc5Ni4xNC4xLjE2ODYwMjg5MjMuMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/Animals%2FIMG_3026.jpg?alt=media&token=a19bc910-9294-40d8-90c3-c9a801b40984&_gl=1*4lvnre*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NjAyNjc5Ni4xNC4xLjE2ODYwMjg5MzcuMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/Animals%2FIMG_1138.jpg?alt=media&token=3c61bbd1-3646-4768-9f6d-9dde76a3d36c&_gl=1*1fm2xqp*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NjAyNjc5Ni4xNC4xLjE2ODYwMjg5NTguMC4wLjA.",
    "https://firebasestorage.googleapis.com/v0/b/photography-c693c.appspot.com/o/Animals%2FIMG_3092.jpg?alt=media&token=ee8d7bf5-3f95-43a7-926d-1b1a2e7f8cb9&_gl=1*1hat4cr*_ga*NjUyMzQzOTkzLjE2ODUyMzg1NzE.*_ga_CW55HF8NVT*MTY4NjAyNjc5Ni4xNC4xLjE2ODYwMjg5NjguMC4wLjA.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FFF]">
      <Header />
      <div className="flex-grow">
        <ImageGallery imageUrls={imageUrls} />
      </div>
      <Footer />
    </div>
  );
};

export default Animals;
