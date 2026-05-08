"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PHONE = "tel:+919876543210";
const PHONE_TEXT = "+91 98765 43210";
const EMAIL = "mailto:info@manshagroup.in";
const EMAIL_TEXT = "info@manshagroup.in";
const WHATSAPP = "https://wa.me/919876543210";
const VEGA_SLIDES = [
  "/mansha-image/vegastreet-slider1.jpg",
  "/mansha-image/vegastreet-slider3.jpg",
  "/mansha-image/vegastreet-slider-3.jpg",
];

const iconBtn =
  "inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-white transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:opacity-60";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeVegaSlide, setActiveVegaSlide] = useState(0);

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

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveVegaSlide((prev) => (prev + 1) % VEGA_SLIDES.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="about-hero relative min-h-screen overflow-hidden">
        <Image
          src="/mansha-image/commerical-hero.jpg"
          alt="Commercial spaces hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#10040445]" />

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

        <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-8xl items-start justify-center px-5 pt-28 sm:px-8 md:items-end md:justify-end md:pt-0 md:pb-10 lg:px-[75px] lg:pb-12">
          <div className="flex items-stretch gap-4 sm:gap-5">
            <span className="hidden w-px shrink-0 self-stretch bg-white md:block" aria-hidden />
            <div className="text-center text-white md:text-left">
              <h1 className="whitespace-nowrap font-optima text-[18px] md:text-[25px] lg:text-[36px] font-medium leading-[42px] tracking-[0] capitalize text-white">
                The Future of Commercial Spaces
              </h1>
              <p className="mt-0 md:mt-2 font-optima text-[16px] md:text-[18px] lg:text-[27px] font-medium leading-[100%] tracking-[0] capitalize text-white">
                Premium Office Spaces
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full  bg-white py-[35px] lg:py-[70px]">
        <div className="mx-auto max-w-[1525px] px-5 sm:px-8 lg:px-[70px]">
          <div className="mb-6 flex items-center justify-center gap-1 font-montserrat text-[16px] font-normal leading-[100%] tracking-[0] capitalize text-white sm:mb-8 md:justify-start">
            <span className="text-[#666666]">Home</span>
            <span className="text-[#666666]">|</span>
            <span className="text-[#666666]">Residential</span>
            <span className="text-[#666666]">|</span>
            <span className="text-[#652A27]">Vega Street</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-[260px_1fr] xl:gap-15">
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-[260px] w-[260px] overflow-hidden rounded-full">
                <Image
                  src="/mansha-image/vegastreet-circle.png"
                  alt="Vega Street circular preview"
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
            </div>

            <div className="relative overflow-hidden border border-[#E2E2E2] bg-white lg:mr-[-70px]">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${activeVegaSlide * 100}%)` }}
              >
                {VEGA_SLIDES.map((src) => (
                  <div key={src} className="relative h-[240px] w-full shrink-0 sm:h-[340px] xl:h-[470px]">
                    <Image
                      src={src}
                      alt="Vega Street slider visual"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {VEGA_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setActiveVegaSlide(idx)}
                    className={`pointer-events-auto h-2 rounded-full transition-all ${
                      activeVegaSlide === idx ? "w-7 bg-white" : "w-2 h-2 bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-[35px] lg:pb-[70px]">
        <div className="mx-auto max-w-[1525px] px-5 sm:px-8 lg:px-[70px]">
          <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-[1fr_1.7fr] md:justify-items-start xl:gap-14">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="font-optima text-[24px] md:text-[36px] lg:text-[28px] font-medium leading-[100%] tracking-[0] text-black">
                About Vega Street
              </h2>
              <button
                type="button"
                className="mt-4 hidden w-fit items-center gap-2 rounded-full bg-[#652A27] px-6 py-3 font-montserrat text-[16px] font-normal leading-[100%] tracking-[0] text-white lg:mt-8 lg:inline-flex"
              >
                Enquire Now
                <i className="ri-arrow-right-line text-[20px]" aria-hidden />
              </button>
            </div>

            <p className="text-center font-montserrat text-[16px] font-normal leading-[25px] md:leading-[28px] tracking-[0px] capitalize text-[#333333] md:text-left">
              Welcome to{" "}
              <span className="text-[#652A27]">Vega Street by Mansha Group</span>,
              your new business hub. This commercial space is designed with your
              success in mind, offering high visibility, modern amenities, and a
              location that can&apos;t be beat. Vega Street is the smart choice for
              businesses ready to make their mark. Welcome to{" "}
         Vega Street by Mansha Group,
              your new business hub. This premier commercial space is meticulously
              designed with your success in mind, offering high visibility, modern
              amenities, and a location that simply can&apos;t be beat. Situated in
              the heart of a bustling area, Vega Street provides a vibrant
              environment that attracts both foot traffic and business
              opportunities. With state-of-the-art infrastructure, flexible spaces,
              and a commitment to
            </p>
            <button
              type="button"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#652A27] px-6 py-3 font-montserrat text-[16px] font-normal leading-[100%] tracking-[0] text-white lg:hidden"
            >
              Enquire Now
              <i className="ri-arrow-right-line text-[20px]" aria-hidden />
            </button>
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
              <a
                href="#"
                onClick={() => setOpen(false)}
                className={sidebarLinkClass}
                style={{
                  transitionDelay: open ? "440ms" : "0ms",
                }}
              >
                <span className={sidebarLabelClass}>Contact</span>
              </a>
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

export default Navbar;