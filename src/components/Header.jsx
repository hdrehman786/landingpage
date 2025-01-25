"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown, faHeart, faMagnifyingGlass, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleSearch = () => setSearchOpen(!searchOpen)

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-gray-800 dark:text-white">
            Exclusive
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar for larger screens */}
            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Search Toggle */}
            <button
              className="lg:hidden text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white focus:outline-none"
              onClick={toggleSearch}
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6 w-6" />
            </button>

            {/* Wishlist and Cart Icons */}
            <a
              href="/wishlist"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
              aria-label="Wishlist"
            >
              <FontAwesomeIcon icon={faHeart} className="h-6 w-6" />
            </a>
            <a
              href="/cart"
              className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
              aria-label="Cart"
            >
              <FontAwesomeIcon icon={faCartArrowDown} className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Navigation - Centered and slightly raised */}
        <nav
          className={`
          ${menuOpen ? "block" : "hidden"}
          lg:block lg:static lg:bg-transparent lg:dark:bg-transparent
          fixed inset-0 z-50 bg-white dark:bg-gray-800
          lg:transform-none lg:opacity-100
          transition-all duration-300 ease-in-out
          ${menuOpen ? "opacity-100" : "opacity-0"}
        `}
        >
          {/* Close button for mobile menu */}
          <button
            className="lg:hidden absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
          </button>
          <div className="container mx-auto px-4 py-6 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:-mt-4">
              <a
                href="/"
                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white py-2 lg:px-4"
              >
                Home
              </a>
              <a
                href="/contact"
                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white py-2 lg:px-4"
              >
                Contact
              </a>
              <a
                href="/about"
                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white py-2 lg:px-4"
              >
                About
              </a>
              <a
                href="/signup"
                className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white py-2 lg:px-4"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Search Bar */}
      <div
        className={`lg:hidden bg-white dark:bg-gray-800 px-4 py-3 transition-all duration-300 ease-in-out ${
          searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

