import React from 'react'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import { IoIosContact } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Link from 'next/link'
const Nav = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link href='/' className="mr-5 hover:text-gray-900 text-xl cursor-pointer">{<AiFillHome />}</Link>
                        <Link href='/about' className="mr-5 hover:text-gray-900 text-xl cursor-pointer">{<AiFillInfoCircle />}</Link>
                        <Link href='contact' className="mr-5 hover:text-gray-900 text-xl cursor-pointer">{<IoIosContact />}</Link>
                        <Link href='/alllinks' className="hover:text-gray-900 text-xl cursor-pointer">{<BsThreeDotsVertical />}</Link>
                    </nav>
                    <Link href='/' className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">

                        <span className="ml-3 text-xl">Online Room Finder</span>
                    </Link>
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                        <button className="text-white inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">Login
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Nav
