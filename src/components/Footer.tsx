import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#FFE8D6] text-center text-white">
      <div className="p-4 flex space-x-4 justify-center items-center">
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} style={{ color: "#6B705C" }} size='lg' />
        </a>
        <a href="https://www.instagram.com/moments.by.mandy">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#6B705C" }} size='lg' />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGoogle} style={{ color: "#6B705C" }} size='lg' />
        </a>
      </div>
      <nav className="p-4 text-neutral-700 dark:text-neutral-200">
        <ul className="flex justify-center space-x-6 text-[#6B705C]">
          <li>
            <a className="hover:text-gray-200" href="#">Home</a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">About</a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">Portfolio</a>
          </li>
          <li>
            <a className="hover:text-gray-200" href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="bg-[#FFE8D6] p-2 text-center text-[#6B705C]">
        All content Copyright © 2023 Moments by Mandy
      </div>
    </footer>
  );
}
