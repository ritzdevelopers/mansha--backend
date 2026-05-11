"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PHONE = "tel:+919876543210";
const PHONE_TEXT = "+91 98765 43210";
const EMAIL = "mailto:info@manshagroup.in";
const EMAIL_TEXT = "info@manshagroup.in";
const WHATSAPP = "https://wa.me/919876543210";

const iconBtn =
  "inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-white transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:opacity-60";

const ContactNav = () => {
  const [open, setOpen] = useState(false);

  const sidebarLinkClass = `optima-menu-link mobile-nav-item-link block cursor-pointer text-[30px] text-black ${
    open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
  }`;
  const sidebarLabelClass =
    "transition-colors duration-150 ease-out hover:text-[#652A27]";

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKeyUp = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, []);

  return (
    <>
      <section className="about-hero relative min-h-screen overflow-hidden">
        <Image
          src="/contact-image/contact-hero.jpg"
          alt="About Hero"
          fill
          priority
          className="z-0 object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180.11deg, rgba(210, 102, 30, 0) 39.46%, #0D0202 99.9%)",
          }}
          aria-hidden
        />

        <header className="absolute left-0 right-0 top-0 z-50 bg-[#FAFAFA2B] backdrop-blur-[1px] border-b border-white/10">
          {open && (
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/20"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
          )}

          <div className="relative z-50 mx-auto flex h-14 max-w-8xl items-center justify-between px-5 py-8 sm:px-8 lg:px-[75px]">
            <Link
              href="/"
              className="flex shrink-0 items-center py-1 outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/mansha-svg/mansha-logo.svg"
                width={90}
                height={50}
                alt="Mansha"
                className="h-12 w-auto sm:h-12"
                priority
              />
            </Link>

            <div className="flex shrink-0 items-center gap-0 sm:gap-3">
              <a href={PHONE} className={iconBtn} aria-label="Call us">
                <i className="ri-phone-line text-[22px] leading-none" aria-hidden />
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={iconBtn}
                aria-label="WhatsApp"
              >
                <i
                  className="ri-whatsapp-line text-[22px] leading-none"
                  aria-hidden
                />
              </a>
              <button
                type="button"
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-white transition-opacity active:opacity-60"
                aria-controls="mobile-navigation"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((prev) => !prev)}
              >
                <Image
                  src="/mansha-svg/humburger-sanskar.svg"
                  width={22}
                  height={22}
                  alt="menu"
                  className="brightness-0 invert"
                />
              </button>
            </div>
          </div>
        </header>

        <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-8xl items-end px-5 pb-8 sm:px-8 lg:px-[75px]">
          <div className="text-white">
            <h1 className="font-[Optima] text-[36px] font-[500] leading-[48px] tracking-[0] text-center capitalize text-white">
              Contact Us
            </h1>
            <div className="mt-0 md:mt-2 flex items-center gap-1 font-[Montserrat] text-[16px] font-medium leading-[100%] tracking-[0] capitalize text-white">
              <Link href="/" className="hover:opacity-80">
                Home
              </Link>
              <i className="ri-arrow-right-s-line text-base" aria-hidden />
              <span>Contact us</span>
            </div>
          </div>
        </div>
      </section>

      <aside
        id="mobile-navigation"
        className={`fixed right-0 top-0 z-50 flex h-screen w-[450px] max-w-[90vw] flex-col bg-white p-8 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Main mobile"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close sidebar"
          className="absolute right-5 top-5 inline-flex h-9 w-9 cursor-pointer items-center justify-center text-black transition-opacity hover:opacity-70"
        >
          <i className="ri-close-large-line text-[20px]" aria-hidden />
        </button>
        <div className="flex justify-center">
          <Link href="/" onClick={() => setOpen(false)}>
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
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={sidebarLinkClass}
                style={{
                  transitionDelay: open ? "200ms" : "0ms",
                }}
              >
                <span className={sidebarLabelClass}>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                onClick={() => setOpen(false)}
                className={sidebarLinkClass}
                style={{
                  transitionDelay: open ? "320ms" : "0ms",
                }}
              >
                <span className={sidebarLabelClass}>About</span>
              </Link>
            </li>
            <li>
            <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={sidebarLinkClass}
                style={{
                  transitionDelay: open ? "320ms" : "0ms",
                }}
              >
                <span className={sidebarLabelClass}>Contact us</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className={sidebarLinkClass}
                style={{
                  transitionDelay: open ? "560ms" : "0ms",
                }}
              >
                <span className={sidebarLabelClass}> Carrers</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpen(false)}
                className={sidebarLinkClass}
                style={{
                  transitionDelay: open ? "680ms" : "0ms",
                }}
              >
                <span className={sidebarLabelClass}>Blogs</span>
              </a>
            </li>
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

      <style jsx global>{`
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

export default ContactNav;