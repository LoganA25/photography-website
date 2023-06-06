import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react"
import Link from "next/link";
import Image from "next/image";
import img from "../../public/Logo/MandyLogos-02.png";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
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
                      <div className="overflow-hidden ">
                      <Image
                        src={img}
                        alt="Moments by Mandy"
                        width={200}
                        height={200}
                      />
                      </div>
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

              <div className="-mr-2 flex sm:hidden ml-auto">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
              <Disclosure.Button
                as="a"
                href="/"
                className="block rounded-md px-3 py-2 text-center font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block rounded-md px-3 py-2 text-center font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block rounded-md px-3 py-2 text-center font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
