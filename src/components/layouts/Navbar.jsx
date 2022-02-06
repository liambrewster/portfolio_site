import React from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 pt-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              href="#p"
            >
            </a>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-red block lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars "><FaBars /></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug  hover:opacity-75 hover:tracking-wider"
                  href="#featured"
                >
                  <span className="ml-2">Works</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug  hover:opacity-75 hover:tracking-wider"
                  href="https://blog.liambrewster.co.uk"
                >
                  <span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug  hover:opacity-75 hover:tracking-wider"
                  href="#contact"
                >
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;