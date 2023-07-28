import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <div className="bg-[#FFF] text-[#2D2D2D]">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-xl">
            <div className="text-2xl sm:text-4xl md:text-3xl font-bold mb-4 text-center text-[#7A7A7A]">
              Contact Me
            </div>
            <form className="bg-[#7A7A7A] shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-[#E8E9ED] text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#E8E9ED] leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[#E8E9ED] text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#E8E9ED] leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-[#E8E9ED] text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message"
                  rows={4}
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-[#FFF] text-[#7A7A7A] hover:bg-[#7A7A7A] hover:text-[#FFF] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
