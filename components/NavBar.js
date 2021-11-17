import React,{useState} from 'react'

import { Transition } from "@headlessui/react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="pb-18">
        <nav className="bg-white w-full fixed z-50 border-b-2" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-right justify-between h-16 ">
                <div className="flex items-center ">
                <div className="flex-shrink-0 ">
                    <img
                    className="h-10 w-10"
                    src="/vercel.svg"
                    alt="LibraSmart Logo"
                    />
                </div>
                <div className="hidden md:block lg:px-auto">
                    <div className="ml-10 flex items-baseline space-x-4">
                    <a
                        href="/"
                        className=" hover:bg-gray-200 text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </a>

                   

                    



                    <a
                        href="/team"
                        className="text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                        About Us
                    </a>

                    <a
                        href="/videos"
                        className="text-gray-800 hover:bg-gray-200 hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Profile
                    </a>

                    <div className="dropdown inline-block relative">
                        <button className="hover:bg-gray-200 text-black px-3 py-2 rounded-md text-sm font-medium">
                        <span className="mr-1">Buy Subscription</span>
                        </button>
                    </div>

                    
                    </div>
                </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    )}
                </button>
                </div>
            </div>
            </div>

            <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                    <a
                    href="/"
                    className="hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                    Home
                    </a>

                    <a
                    href="/videos"
                    className="text-gray-800 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                    About Us
                    </a>

                    

                    <a
                    href="/team"
                    className="text-gray-800 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                    Profile
                    </a>

                    <a
                    href="/upcoming"
                    className="text-gray-800 hover:bg-gray-200 hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                    >
                    Buy Subscription
                    </a>
                    
                </div>
                </div>
            )}
            </Transition>
        </nav>

        
        </div>
    );
}

export default NavBar
