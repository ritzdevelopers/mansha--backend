import React from "react";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=P-2%2F3%2C+Sector+75%2C+Faridabad%2C+Haryana+121006&output=embed";

const OFFICE_CARDS = [
  {
    title: "Corporate Office",
    address: "P-2/3, Sector 75, Faridabad, Haryana 121006",
  },
  {
    title: "Faridabad Office",
    address: "P-2/3, Sector 75, Faridabad, Haryana 121006",
  },
  {
    title: "Faridabad Office",
    address: "P-2/3, Sector 75, Faridabad, Haryana 121006",
  },
];

const Happen = () => {
  return (
    <section className="w-full bg-white py-[35px] lg:py-[70px]">
      <div className=" mx-auto max-w-[1525px] px-5 sm:px-8 lg:px-[75px] 2xl:px-[70px]">
        <div className="min-w-0">
          <div>
            <h2 className="font-optima text-[28px] md:text-[36px] font-[500] capitalize leading-[100%] tracking-normal text-[#111111] text-center md:text-left">
              Let&apos;s Make It Happen
            </h2>
            <div className="lg:mt-4 mt-2 h-px w-full bg-[#E5E5E5] xl:w-[650px]" aria-hidden />
            <p className="font-montserrat md:mt-10 mt-5 text-[18px] font-normal capitalize leading-[24px] tracking-normal text-[#333333] text-center md:text-left">
              Reach Out For Insights, Collaborations, And Solutions.
            </p>
          </div>

          <div className="lg:mt-8 mt-5 flex min-w-0 flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-30">
            <ul className=" lg:mt-20 mt-5 flex min-w-0 flex-1 list-none flex-col gap-8 p-0 lg:flex-[1]">
              {OFFICE_CARDS.map((card, index) => (
                <li
                  key={`${card.title}-${index}`}
                  className={`rounded-xl bg-white shadow-[0px_4px_16px_0px_#0000001A] ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_8px_24px_0px_#00000024] ${
                    index === 0 ? "px-5 pt-5 pb-[60px]" : "px-5 pt-5 pb-[50px]"
                  }`}
                >
                  <h3 className="font-optima text-[24px] font-[500] capitalize leading-[29px] tracking-normal text-[#111111]">
                    {card.title}
                  </h3>
                  <p className="font-montserrat mt-2 text-[16px] font-medium capitalize leading-[27px] tracking-normal text-[#333333]">
                    {card.address}
                  </p>
                </li>
              ))}
            </ul>

            <div className="relative xl:h-[640px] lg:h-[550px] h-[450px] w-full min-w-0 shrink-0 overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] lg:flex-[1.12]">
              <iframe
                title="Mansha office location map"
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 block h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happen;
