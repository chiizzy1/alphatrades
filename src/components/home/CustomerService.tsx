import { FC } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { BTC, Shield, StarA } from "@/assets";

interface CustomerServiceProps {}

const CustomerService: FC<CustomerServiceProps> = ({}) => {
  return (
    <section className="pt-[140px] pb-[179px] z-[1]">
      <div className="container max-w-6xl mx-auto w-full relative">
        <div className="flex flex-col md:flex-row gap-[20px]">
          <div className="relative w-full">
            <Image src={BTC} width={261} height={261} alt="bitcoin icon" className="absolute left-[1%] top-[29%]" />
            <Image src={Shield} width={275} height={320} alt="bitcoin icon" className="absolute left-[20%]" />
            <Image src={StarA} width={74} height={74} alt="bitcoin icon" className="absolute left-[15%] -top-[10%]" />
          </div>
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[40px] font-extrabold leading-[52px] text-center md:text-left max-w-[580px] text-white font-syne">
                24/7 access to full service customer support
              </h2>
              <p className="text-[16px] leading-[24px] text-center md:text-left font-normal max-w-[580px] text-secondary">
                We invest more resources than any other platform in making sure great support from real people is a click away,
                whenever you need it.
              </p>
            </div>
            <Button variant="outline">Get Started</Button>
          </div>
        </div>

        {/* bg-gradient */}
        <div className="absolute w-[962px] h-[471px] customer-service-gradient -top-[50px] -left-[600px] -z-[2] rounded-full" />
      </div>
    </section>
  );
};

export default CustomerService;
