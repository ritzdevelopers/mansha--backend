"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const PHONE = "tel:+919876543210";
const PHONE_TEXT = "+91 98765 43210";
const EMAIL = "mailto:info@manshagroup.in";
const EMAIL_TEXT = "info@manshagroup.in";

const NAV_ITEMS = [
  { label: "Home", href: "/", delay: "200ms" },
  { label: "About", href: "/about-us", delay: "320ms" },
  { label: "Contact", href: "/contact", delay: "440ms" },
  { label: "Carrers", href: "#", delay: "560ms" },
  { label: "Blogs", href: "#", delay: "680ms" },
];

const NavSideMenu = ({ open, onClose }) => {
  const sidebarLinkClass = `optima-menu-link mobile-nav-item-link block cursor-pointer text-[30px] text-black ${
    open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
  }`;
  const sidebarLabelClass =
    "transition-colors duration-150 ease-out hover:text-[#652A27]";

  return (
    <>
      <aside
        id="mobile-navigation"
        className={`fixed right-0 top-0 z-50 flex h-screen w-[450px] max-w-[90vw] flex-col bg-white p-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Main mobile"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
          className="absolute right-5 top-5 inline-flex h-9 w-9 cursor-pointer items-center justify-center text-black transition-opacity hover:opacity-70"
        >
          <i className="ri-close-large-line text-[20px]" aria-hidden />
        </button>

        <div className="flex justify-center">
          <Link href="/" onClick={onClose}>
            <Image
              src="/mansha-svg/mansha-logo.svg"
              width={100}
              height={56}
              alt="Mansha"
              className="h-auto w-[100px]"
            />
          </Link>
        </div>

        <nav className="mt-8" aria-label="Sidebar menu">
          <ul className="space-y-5 pl-2 md:space-y-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={sidebarLinkClass}
                  style={{
                    transitionDelay: open ? item.delay : "0ms",
                  }}
                >
                  <span className={sidebarLabelClass}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pl-2 pt-8">
          <a
            href={PHONE}
            className="optima-menu-link block cursor-pointer text-[22px] font-medium text-black transition-colors hover:text-[#652A27]"
          >
            {PHONE_TEXT}
          </a>
          <a
            href={EMAIL}
            className="optima-menu-link mt-3 block cursor-pointer text-[22px] font-medium text-black transition-colors hover:text-[#652A27]"
          >
            {EMAIL_TEXT}
          </a>
        </div>
      </aside>

      <style>{`
        .optima-menu-link {
          font-family: Optima, "Segoe UI", Candara, "Noto Sans", sans-serif;
          line-height: 1.2;
        }

        .mobile-nav-item-link {
          transition-property: transform, opacity;
          transition-duration: 700ms;
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </>
  );
};

export default NavSideMenu;
