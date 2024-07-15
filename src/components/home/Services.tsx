import { StarA, StarB } from "@/assets";
import { services } from "@/constants";
import Image from "next/image";
import { FC } from "react";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <section className="pt-[125px] pb-[85px] z-[1]">
      <div className="container max-w-6xl mx-auto w-full relative">
        <div className="flex items-center gap-[20px]">
          {services.map(({ id, title, description, cta, icon }) => (
            <div key={id}>
              <div className="flex flex-col gap-[32px] py-[32px] px-[24px] rounded-[5px] bg-[#141F27]">
                <div className="flex flex-col gap-[16px] items-center">
                  <Image src={icon} alt={`${title} icon`} />
                  <h3 className="text-[24px] font-extrabold leading-[31.2px] text-center text-white font-syne">{title}</h3>
                  <p className="text-[16px] font-normal leading-[24px] text-center text-secondary max-w-[332px]">{description}</p>
                </div>
                <span className="text-[16px] font-semibold leading-[16px] text-center text-primary">{cta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* floating icon */}
        <Image src={StarA} alt="bitcoin icon" className="absolute -left-[8%] -bottom-[35%]" />
        <Image src={StarB} alt="bitcoin icon" className="absolute -left-[10%] -bottom-[10%]" />
      </div>
    </section>
  );
};

export default Services;
