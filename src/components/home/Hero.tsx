import { FC } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { EthCoin, LiteCoin, LooksRareCoin, Sphere, StarA, StarB, StarC } from "@/assets";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="z-[1] pt-[169px] pb-[140px]">
      <div className="container max-w-6xl mx-auto w-full h-full relative">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center gap-[32px]">
            <div className="flex flex-col items-center gap-[16px]">
              <h1 className="text-[64px] font-extrabold leading-[83.2px] text-center max-w-[780px] text-white font-syne">
                Trading for anyone Anywhere.
              </h1>
              <p className="text-[16px] leading-[24px] text-center font-normal max-w-[580px] text-secondary">
                Buy, sell, and grow your crypto with Flip, the platform dedicated to every trader at every level.
              </p>
            </div>
            <Button>Get Started</Button>
          </div>
        </div>

        {/* bg-gradient */}
        <div className="absolute w-[400px] h-[400px] hero-gradient -top-[250px] -left-[50px] -z-[2] rounded-full" />

        {/* Floating Icons */}
        <Image
          src={EthCoin}
          alt="Ethereum icon"
          width={170}
          height={170}
          className="absolute top-[22%] left-[19%] -z-[1] opacity-80"
        />
        <Image
          src={LooksRareCoin}
          alt="Looksrare coin icon"
          width={135}
          height={135}
          className="absolute -top-[30%] left-3%] -z-[1]"
        />
        <Image
          src={Sphere}
          alt="Sphere icon"
          width={100}
          height={100}
          className="absolute top-[39%] -left-[1%] -z-[1] opacity-80"
        />
        <Image
          src={LiteCoin}
          alt="Litecoin icon"
          width={105}
          height={105}
          className="absolute -bottom-[20%] left-[7%] -z-[1]"
        />
        <Image src={StarA} alt="star icon" className="absolute top-[10%] left-[80%] -z-[1] opacity-80" />
        <Image src={StarB} alt="star icon" className="absolute top-[25%] left-[90%] -z-[1] opacity-80" />
        <Image src={StarC} alt="star icon" className="absolute top-[75%] left-[90%] -z-[1] opacity-80" />
      </div>
    </section>
  );
};

export default Hero;