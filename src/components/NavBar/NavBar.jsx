import React, { useState } from "react";
import "./NavBar.css";
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-4 px-8 bg-black h-[5vh] border-b-2 border-white border-opacity-20">
      <h1 className="text-3xl font-bold text-white select-none">Tic Tac Toe</h1>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-7 bg-white"></span>
            <span className="block h-0.5 w-7 bg-white"></span>
            <span className="block h-0.5 w-7 bg-white"></span>
          </div>

          {isNavOpen && (
            <div className="showMenuNav">
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between min-h-[250px] ">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About Us</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Services</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Feedback</a>
                </li>
              </ul>
            </div>
          )}
        </section>

        <ul class="DESKTOP-MENU hidden space-x-8 lg:flex text-white text-lg select-none">
          <li>
            <a href="/about" class="link-with-underline">
              About
            </a>
          </li>
          <li>
            <a href="/portfolio" class="link-with-underline">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" class="link-with-underline">
              Contact
            </a>
          </li>
          <li>
            <a href="/feedback" class="link-with-underline">
              Feedback
            </a>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
