"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const LEFT_SLIDES = [
  {
    src: "/mansha-image/outdoor-cafe-big.jpg",
    alt: "A terrace for every home",
    title: "A Terrace For Every Home",
    text: "Enjoy A Private Terrace, No Matter Which Floor You Choose.",
  },
  {
    src: "/mansha-image/club-with-lawn-big.jpg",
    alt: "Club with lawn",
    title: "Clubside Lawn Living",
    text: "Relax In Curated Green Spaces Designed For Everyday Comfort.",
  },
  {
    src: "/mansha-image/club-pool-big.jpg",
    alt: "Club pool",
    title: "Skyline Pool Moments",
    text: "Experience Leisure With Stunning Views And Premium Ambience.",
  },
];

const RIGHT_SLIDES = [
  {
    src: "/mansha-image/central-landscape-bog.jpg",
    alt: "Linear greens and themed landscapes",
    title: "Linear Greens & Themed Landscapes",
    text: "Expansive Green Vistas And Themed Outdoor Experiences.",
  },
  {
    src: "/mansha-image/gym-new-big.jpg",
    alt: "Gym",
    title: "Modern Fitness Studio",
    text: "Train In A Well-Equipped Space Built For Daily Performance.",
  },
];
const ALL_SLIDES = [...LEFT_SLIDES, ...RIGHT_SLIDES];

const Excellence = () => {
  const [leftSlide, setLeftSlide] = useState(0);
  const [rightSlide, setRightSlide] = useState(0);
  const [leftTransitioning, setLeftTransitioning] = useState(true);
  const [rightTransitioning, setRightTransitioning] = useState(true);
  const [mobileSlide, setMobileSlide] = useState(0);
  const [mobileTransitioning, setMobileTransitioning] = useState(true);
  const leftSlidesLoop = [...LEFT_SLIDES, LEFT_SLIDES[0]];
  const rightSlidesLoop = [...RIGHT_SLIDES, RIGHT_SLIDES[0]];
  const mobileSlidesLoop = [...ALL_SLIDES, ALL_SLIDES[0]];

  const leftIndex = ((leftSlide % LEFT_SLIDES.length) + LEFT_SLIDES.length) % LEFT_SLIDES.length;
  const rightIndex = ((rightSlide % RIGHT_SLIDES.length) + RIGHT_SLIDES.length) % RIGHT_SLIDES.length;
  const activeLeftSlide = LEFT_SLIDES[leftIndex];
  const activeRightSlide = RIGHT_SLIDES[rightIndex];
  const mobileIndex = ((mobileSlide % ALL_SLIDES.length) + ALL_SLIDES.length) % ALL_SLIDES.length;
  const activeMobileSlide = ALL_SLIDES[mobileIndex];
  const goNext = () => {
    setLeftTransitioning(true);
    setRightTransitioning(true);
    setLeftSlide((prev) => prev + 1);
    setRightSlide((prev) => prev + 1);
    setMobileTransitioning(true);
    setMobileSlide((prev) => prev + 1);
  };
  const goPrev = () => {
    setLeftTransitioning(true);
    setRightTransitioning(true);
    setLeftSlide((prev) => prev - 1);
    setRightSlide((prev) => prev - 1);
    setMobileTransitioning(true);
    setMobileSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLeftTransitioning(true);
      setRightTransitioning(true);
      setLeftSlide((prev) => prev + 1);
      setRightSlide((prev) => prev + 1);
      setMobileTransitioning(true);
      setMobileSlide((prev) => prev + 1);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const onLeftTransitionEnd = () => {
    if (leftSlide === LEFT_SLIDES.length) {
      setLeftTransitioning(false);
      setLeftSlide(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setLeftTransitioning(true)));
    }
  };

  const onRightTransitionEnd = () => {
    if (rightSlide === RIGHT_SLIDES.length) {
      setRightTransitioning(false);
      setRightSlide(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setRightTransitioning(true)));
    }
  };

  const onMobileTransitionEnd = () => {
    if (mobileSlide === ALL_SLIDES.length) {
      setMobileTransitioning(false);
      setMobileSlide(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setMobileTransitioning(true)));
    }
  };

  return (
    <section className="w-full pb-[35px] lg:pb-[70px]">
      <div className="mx-auto max-w-[1525px] px-5 sm:px-8 lg:px-[70px]">
        <h2 className="font-optima text-center md:text-left md:text-[36px] text-[28px] font-[550] leading-[54px] capitalize text-[#000000]">
          Essence of Excellence
        </h2>

        <div className="mt-6 hidden grid-cols-1 gap-4 xl:grid xl:grid-cols-[3fr_1fr]">
          <article className="group relative overflow-hidden">
            <div
              className="flex h-[430px] w-full ease-out"
              style={{
                transform: `translateX(-${leftSlide * 100}%)`,
                transitionProperty: "transform",
                transitionDuration: leftTransitioning ? "700ms" : "0ms",
              }}
              onTransitionEnd={onLeftTransitionEnd}
            >
              {leftSlidesLoop.map((slide, idx) => (
                <div key={`${slide.src}-${idx}`} className="relative h-full w-full shrink-0">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 75vw"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="font-montserrat text-[20px] font-bold leading-[100%] capitalize text-white">
                {activeLeftSlide.title}
              </h3>
              <p className="mt-3 font-montserrat text-[16px] font-medium leading-[25px] capitalize text-white">
                {activeLeftSlide.text}
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden">
            <div
              className="flex h-[430px] w-full ease-out"
              style={{
                transform: `translateX(-${rightSlide * 100}%)`,
                transitionProperty: "transform",
                transitionDuration: rightTransitioning ? "700ms" : "0ms",
              }}
              onTransitionEnd={onRightTransitionEnd}
            >
              {rightSlidesLoop.map((slide, idx) => (
                <div key={`${slide.src}-${idx}`} className="relative h-full w-full shrink-0">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-montserrat text-[20px] font-bold leading-[100%] capitalize text-white">
                {activeRightSlide.title}
              </h3>
              <p className="mt-3 overflow-hidden text-ellipsis whitespace-nowrap font-montserrat text-[16px] font-medium leading-[25px] capitalize text-white">
                {activeRightSlide.text}
              </p>
            </div>
          </article>
        </div>

        <article className="relative mt-2 md:mt-6 overflow-hidden xl:hidden">
          <div
            className="flex h-[150px] w-full ease-out lg:h-[380px] md:h-[330px]"
            style={{
              transform: `translateX(-${mobileSlide * 100}%)`,
              transitionProperty: "transform",
              transitionDuration: mobileTransitioning ? "700ms" : "0ms",
            }}
            onTransitionEnd={onMobileTransitionEnd}
          >
            {mobileSlidesLoop.map((slide, idx) => (
              <div key={`${slide.src}-${idx}`} className="relative h-full w-full shrink-0 bg-black/10">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
          <div className="absolute bottom-2 left-2 md:left-6 right-2 md:right-6 text-white md:bottom-6">
            <h3 className="font-montserrat md:text-[20px] text-[10px] font-bold md:leading-[100%] leading-[12px] capitalize text-white">
              {activeMobileSlide.title}
            </h3>
            <p className="mt-3 font-montserrat md:text-[16px] text-[8px] font-medium md:leading-[25px] leading-[12px] capitalize text-white">
              {activeMobileSlide.text}
            </p>
          </div>
        </article>

        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goPrev}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#333333] shadow-[0px_4px_16px_0px_#0000001A]"
          >
            <i className="ri-arrow-left-line" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goNext}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#333333] shadow-[0px_4px_16px_0px_#0000001A]"
          >
            <i className="ri-arrow-right-line" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Excellence;