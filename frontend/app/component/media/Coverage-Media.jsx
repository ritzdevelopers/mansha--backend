import Image from "next/image";
import React from "react";

const TABS = ["Digital Media", "PR Coverage", "Print Media"];

const MEDIA_CARDS = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  date: "November 10, 2025",
  title: "manshagroup clears ₹1,500 crore debt",
}));

const CoverageMedia = () => {
  return (
    <section className="w-full bg-white pb-[35px] lg:pb-[70px]">
      <div className="mx-auto max-w-[1525px] px-5 sm:px-8 lg:px-[70px]">
  <div className="flex flex-col gap-6 border-b border-[#00000033] pb-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-wrap items-start gap-8 md:gap-4 lg:gap-22">
            {TABS.map((tab, index) => (
              <button
                key={tab}
                type="button"
                className="flex flex-col items-center gap-4 font-montserrat text-[16px] lg:text-[20px] font-medium leading-[100%] tracking-normal text-[#333333]"
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                    index === 0
                      ? "border-[#652A27] bg-[#652A27] text-white"
                      : "border-[#333333] bg-white text-transparent"
                  }`}
                  aria-hidden
                >
                  {index === 0 && <i className="ri-check-line text-[18px]" />}
                </span>
                {tab}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mx-auto flex h-11 w-fit items-center gap-12 rounded-full border border-[#333333] px-5 font-montserrat text-[16px] font-medium leading-[100%] tracking-normal text-[#333333] md:mx-0"
          >
            Sort by Year
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#333333] text-white">
              <i className="ri-arrow-down-s-line text-[20px]" aria-hidden />
            </span>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MEDIA_CARDS.map((card) => (
            <article
              key={card.id}
              className="rounded-xl bg-white px-4 py-8 shadow-[0px_4px_16px_0px_#0000001A] md:px-5"
            >
              <div className="relative h-[70px] w-[128px]  bg-white">
                <Image
                  src="/media/media-reality.jpg"
                  alt="Realty+"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>

              <div className="mt-5 flex items-center gap-2 font-montserrat text-[13px] font-normal capitalize leading-[100%] tracking-normal text-[#00000099]">
                <i className="ri-calendar-2-line text-[13px]" aria-hidden />
                {card.date}
              </div>

              <h3 className="mt-5 border-l border-l-[#00000066] pl-3 font-montserrat text-[18px] font-semibold capitalize xl:leading-[100%] leading-[120%] tracking-normal text-[#515151]">
                {card.title}
              </h3>

              <a
                href="#"
                className="mt-6 inline-flex font-montserrat text-[14px] font-semibold capitalize leading-[100%] tracking-normal text-[#652A27]"
              >
                read More..
              </a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#D9D9D9]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#D9D9D9]" aria-hidden />
          <span className="h-3 w-16 rounded-full bg-[#6F6F6F]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#D9D9D9]" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default CoverageMedia;