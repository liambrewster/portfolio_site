import React from 'react';

function Navbar() {
  return <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
          {/* TODO-add links href */}
          
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-black hover:opacity-75" href="#">
              Works
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-black hover:opacity-75" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-black hover:opacity-75" href="#">
              Contact
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>;
}

export default Navbar;
