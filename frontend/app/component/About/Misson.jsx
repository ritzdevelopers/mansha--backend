import Image from "next/image";
import React from "react";

const SECTION_TEXT =
  "Our goal is to design homes and offices that're both beautiful and functional. We want to bring high quality, new ideas and modern living in a way that feels smooth and natural. We promise to deliver projects on time make our customers happy and build communities that make peoples daily lives better. We want to create places where people can have experiences and feel like they belong. Our aim is to earn the trust of our residents, partners and stakeholders by delivering projects that show excellence and provide long-term value.";

  const Vision_TEXT =
  "We want to be a real estate brand that people trust and respect. We aim to create developments that are built on honesty, sustainability and lasting value. Our goal is to build communities that're comfortable, elegant and well-designed. We want to offer a way of living that inspires people to live their best lives. We care about the environment. Want to create places that are not only beautiful but also good for the planet. We want to make an impact, on the cities and communities we work in and create a better future for everyone.";
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
              src="/about/our-mission.jpg"
              alt="Our mission visual"
              width={398}
              height={265}
              className="h-auto w-full object-cover md:h-[265px] md:w-[398px]"
              sizes="(max-width: 768px) 100vw, 398px"
            />
          </div>

          <p className="font-montserrat text-[16px] font-normal leading-[25px] md:leading-[29px] text-center md:text-left tracking-[0px] capitalize text-[#333333] lg:self-end max-w-[580px]">
            {SECTION_TEXT}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 border border-[#DDDDDD] p-4 md:gap-6 md:p-6 lg:grid-cols-[398px_1fr] lg:items-start lg:gap-y-6 lg:gap-x-15 lg:p-8 xl:grid-cols-[1fr_398px_auto]">
          <p className="order-3 font-montserrat text-[16px] font-normal leading-[25px]    md:leading-[29px] tracking-[0px] capitalize text-[#333333] lg:order-3 text-center md:text-left lg:self-end max-w-[600px] xl:order-1">
            {Vision_TEXT}
          </p>

          <div className="order-2 w-full overflow-hidden md:w-[398px] lg:order-2">
            <Image
              src="/about/our-vision.jpg"
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