// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import MyDropdown from "./MobileNav";
// export default function Header() {
//   return (
//     <nav className="bg-[#2D2D2D] justify-center p-5">
//       <div className="text-[#E8E9ED] text-xl flex justify-between items-center">
//         <span className="font-semibold text-4xl tracking-tight">
//           <Link href="/">Moments by Mandy</Link>
//         </span>
//         <MyDropdown/>
//         {/* <FontAwesomeIcon icon={faBars} className="md:invisible text-white"  size='lg' /> */}
//         <span className="hidden md:flex items-center space-x-7 text-1xl">
//           <Link href="/">Home</Link>
//           <Link href="about">About</Link>
//           <Link href="contact">Contact</Link>
//         </span>
//       </div>
//     </nav>
//   );
// }

import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/Logo/MandyLogos-02.png";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg[#FFF]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 text-[#2D2D2D] text-xl items-center">
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 font-medium hover:bg-[#2D2D2D] hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 font-medium hover:bg-[#2D2D2D] hover:text-white"
                  >
                    Portfolio
                  </Link>
                  <div className="h-44">
                    <Link className="flex-shrink-0" href="/">
                      <Image
                        src={img}
                        alt="Moments by Mandy"
                        width={200}
                        height={200}
                      />
                    </Link>
                  </div>
                  <Link
                    href="/about"
                    className="rounded-md px-3 py-2 font-medium hover:bg-[#2D2D2D] hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-md px-3 py-2 font-medium hover:bg-[#2D2D2D] hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
