import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { pt_sans_narrow } from "../../public/fonts/custom-fonts";

export default function Footer() {
  return (
    <footer className="bg-[#FFF] text-center text-[#697D5A] text-xl">
      <div className={pt_sans_narrow.className}>
        <div
          className="p-2 flex space-x-4 justify-center items-center"
          style={{ color: "#697D5A" }}
        >
          <a href="#" className="hover:text-[#D5467E]">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/moments.by.mandy"
            className="hover:text-[#D5467E]"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" className="hover:text-[#D5467E]">
            <FontAwesomeIcon icon={faGoogle} size="lg" />
          </a>
        </div>
        <nav className="p-2 text-[#697D5A]">
          <ul className="flex justify-center space-x-6">
            <li className="hover:text-[#D5467E]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#D5467E]">
              <Link href="about">About Me</Link>
            </li>
            <li className="hover:text-[#D5467E]">
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="bg-[#FFF] p-2 text-center">
          All content Copyright © 2023 Moments by Mandy
        </div>
      </div>
    </footer>
  );
}
