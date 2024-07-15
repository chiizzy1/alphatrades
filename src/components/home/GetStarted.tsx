import { FC } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { StarC } from "@/assets";

interface GetStartedProps {}

const GetStarted: FC<GetStartedProps> = ({}) => {
  return (
    <section className="pt-[140px] pb-[114px] z-[1]">
      <div className="container max-w-6xl mx-auto w-full relative">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-[32px]">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="text-[40px] font-extrabold leading-[52px] text-center max-w-[708.6px] text-white font-syne">
                A crypto investment platform that invests in you
              </h2>
              <p className="text-[16px] leading-[24px] text-center font-normal max-w-[580px] text-secondary">
                We invest more resources than any other platrom in making sure great support from real people is a click away,
                whenever you need it.
              </p>
            </div>
            <Button>Get Started</Button>
          </div>
        </div>

        <Image src={StarC} alt="bitcoin icon" className="absolute right-[5%] bottom-[10%]" />
      </div>
    </section>
  );
};

export default GetStarted;
