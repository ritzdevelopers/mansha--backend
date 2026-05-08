import React from "react";

const Map = () => {
  return (
    <section className="w-full bg-white pb-[0px] lg:pb-[0px]">
      <div className="mx-auto max-w-[1525px] ">
        <div className="overflow-hidden border border-[#DDDDDD]">
          <iframe
            title="Mansha Group Corporate Office Map"
            src="https://www.google.com/maps?q=P-23,+Sector+75,+Faridabad&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[300px] w-full md:h-[380px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;