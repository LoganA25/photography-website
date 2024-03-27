import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/photos/Logo.png";
import { pt_sans_narrow } from "../../public/fonts/custom-fonts";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-[#FFF]">
      {({ open }) => (
        <>
          <div className={pt_sans_narrow.className}>
            <div>
              <div className="flex items-center justify-center">
                <div className="sm:hidden absolute left-0">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex rounded-md p-2 text-[#697D5A] hover:bg-[#697D5A] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-9 w-9" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-9 w-9" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="-my-3">
                  <Link href="/">
                    <div className="overflow-hidden">
                      <Image
                        src={Logo}
                        alt="Moments by Mandy"
                        width={150}
                        height={150}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <div className="flex space-x-7 text-[#B6C9B9] text-2xl items-center">
                    <Link
                      href="/"
                      className="rounded-md px-3 py-2 font-medium hidden sm:block hover:text-[#D5467E]"
                    >
                      Home
                    </Link>
                    <Link
                      href="/portfolio"
                      className="rounded-md px-3 py-2 font-medium hidden sm:block hover:text-[#D5467E]"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/about"
                      className="rounded-md px-3 py-2 font-medium hidden sm:block hover:text-[#D5467E]"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-md px-3 py-2 font-medium hidden sm:block hover:text-[#D5467E]"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden text-[#697D5A] hover:text-[#D5467E] text-xl">
              <div className="space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block rounded-md px-3 py-2 text-center font-medium"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/about"
                  className="block rounded-md px-3 py-2 text-center font-medium"
                >
                  About
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-center font-medium"
                >
                  Contact
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
}
