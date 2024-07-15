import { FC } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { Portfolio, StarA, StarB } from "@/assets";

interface InvestProps {}

const Invest: FC<InvestProps> = ({}) => {
  return (
    <section className="pt-[80px] pb-[67px] z-[1]">
      <div className="container max-w-6xl mx-auto w-full relative">
        <div className="flex flex-col md:flex-row gap-[20px]">
          <div className="flex flex-col gap-[32px] w-full">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[40px] font-extrabold leading-[52px] text-center md:text-left max-w-[580px] text-white font-syne">
                Take your first step <br /> into safe, secure crypto investing
              </h2>
              <p className="text-[16px] leading-[24px] text-center md:text-left font-normal max-w-[580px] text-secondary">
                Separated they live in Bookmarks right at the coast of the famous Semantics, large language ocean Separated they
                live in Bookmarks right at the coast.
              </p>
            </div>
            <Button>Get Started</Button>
          </div>

          <div className="relative w-full">
            <Image src={Portfolio} width={294} height={298} alt="bitcoin icon" className="absolute right-[30%] top-[10%]" />
          </div>
        </div>

        {/* bg-gradient */}
        <div className="absolute w-[400px] h-[400px] invest-gradient -top-[50px] right-[50px] -z-[2] rounded-full" />
        {/* floating icon */}
        <Image src={StarA} alt="bitcoin icon" className="absolute right-[5%] bottom-[15%]" />
        <Image src={StarB} alt="bitcoin icon" className="absolute right-[12%] top-[4%]" />
      </div>
    </section>
  );
};

export default Invest;
