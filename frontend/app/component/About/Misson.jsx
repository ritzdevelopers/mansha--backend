import Image from "next/image";
import React from "react";

const SECTION_TEXT =
  "Driven by Mission, integrity, and a commitment to excellence, the leadership behind Mansha Group has consistently focused on creating developments that combine innovation, quality, and long-term value. With deep industry expertise and a forward-thinking approach, every project is shaped with precision, purpose, and customer trust at its core.";

const Misson = () => {
  return (
    <section className="w-full bg-white py-[35px] sm:py-12 lg:py-[70px]">
      <div className="mx-auto flex max-w-[1525px] flex-col gap-6 px-5 sm:px-8 lg:px-[70px]">
        <div className="grid grid-cols-1 gap-5 border border-[#DDDDDD] p-4 md:gap-6 md:p-6 lg:grid-cols-[398px_1fr] lg:items-start lg:gap-y-6 lg:gap-x-15 lg:p-4 xl:grid-cols-[auto_398px_1fr]">
          <h2 className="font-optima text-[28px] font-medium leading-[100%] tracking-[0%] capitalize text-black md:text-[36px] lg:col-span-2 xl:col-span-1 text-center md:text-left">
            Our Mission
          </h2>

          <div className="w-full overflow-hidden md:w-[398px]">
            <Image
              src="/mansha-image/ourmisson.jpg"
              alt="Our mission visual"
              width={398}
              height={265}
              className="h-auto w-full object-cover md:h-[265px] md:w-[398px]"
              sizes="(max-width: 768px) 100vw, 398px"
            />
          </div>

          <p className="font-montserrat text-[16px] font-normal leading-[25px]md:leading-[29px] text-center md:text-left tracking-[0px] capitalize text-[#333333] lg:self-end max-w-[580px]">
            {SECTION_TEXT}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 border border-[#DDDDDD] p-4 md:gap-6 md:p-6 lg:grid-cols-[398px_1fr] lg:items-start lg:gap-y-6 lg:gap-x-15 lg:p-8 xl:grid-cols-[1fr_398px_auto]">
          <p className="order-3 font-montserrat text-[16px] font-normal leading-[25px]md:leading-[29px] tracking-[0px] capitalize text-[#333333] lg:order-3 text-center md:text-left lg:self-end max-w-[600px] xl:order-1">
            {SECTION_TEXT}
          </p>

          <div className="order-2 w-full overflow-hidden md:w-[398px] lg:order-2">
            <Image
              src="/mansha-image/ourvission.jpg"
              alt="Our vision visual"
              width={398}
              height={265}
              className="h-auto w-full object-cover md:h-[265px] md:w-[398px]"
              sizes="(max-width: 768px) 100vw, 398px"
            />
          </div>

          <h2 className="order-1 text-center font-optima text-[28px] font-medium leading-[100%] tracking-[0%] capitalize text-black md:text-[36px] lg:order-1 text-center md:text-left lg:col-span-2 lg:text-left xl:order-3 xl:col-span-1 xl:text-right">
            Our Vision
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Misson;