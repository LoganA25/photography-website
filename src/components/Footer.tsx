import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FFF] text-center text-white">
      <div className="p-2 flex space-x-4 justify-center items-center">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#2D2D2D" }} size='lg' />
        </a>
        <a href="https://www.instagram.com/moments.by.mandy">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#2D2D2D" }} size='lg' />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGoogle} style={{ color: "#2D2D2D" }} size='lg' />
        </a>
      </div>
      <nav className="p-2 text-neutral-700 dark:text-neutral-200">
        <ul className="flex justify-center space-x-6 text-[#2D2D2D]">
          <li>
            <Link className="hover:text-gray-200" href="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-200" href="about">About Me</Link>
          </li>
          <li>
            <Link className="hover:text-gray-200" href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-[#FFF] p-2 text-center text-[#2D2D2D]">
        All content Copyright © 2023 Moments by Mandy
      </div>
    </footer>
  );
}
