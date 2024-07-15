import { chartData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ChartProps {}

const Chart: FC<ChartProps> = ({}) => {
  const dataLength = chartData.length;
  return (
    <section className="pt-[107px] pb-[120px] z-[1]">
      <div className="container max-w-6xl mx-auto w-full relative">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-[32px]">
            <div className="flex flex-col items-center gap-[32px]">
              <div className="flex flex-col items-center gap-[16px]">
                <h2 className="text-[40px] font-extrabold leading-[52px] text-center max-w-[708.6px] text-white font-syne">
                  Buy and sell with the lowest fees in the industry
                </h2>
                <p className="text-[16px] leading-[24px] text-center font-normal max-w-[580px] text-secondary">
                  Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.
                </p>
              </div>
              <Link href="/">
                <span className="text-[16px] leading-[16px] text-center font-semibold max-w-[580px] text-primary">
                  Learn More
                  <span className="inline-block transition-transform motion-reduce:transform-none ml-[12px]">-&gt;</span>
                </span>
              </Link>
            </div>

            <div className="rounded-[25px] py-[20px] px-[32px] bg-black">
              {chartData.map(({ id, name, short, percentage, price, link, vector }, index) => (
                <div key={id}>
                  <div className="flex gap-[32px] items-center py-[13px]">
                    <span className="text-[20px] leading-[30px] font-bold w-[207px] text-white">{name}</span>
                    <span className="text-[20px] leading-[30px] font-bold w-[91px] text-primary">{short}</span>
                    <span className="text-[20px] leading-[30px] font-bold w-[231px] text-white text-right">{price}</span>
                    <span className="text-[20px] leading-[30px] font-bold w-[100px] text-green-500 text-right">{percentage}</span>
                    <Image src={vector} alt="graph" width={208} height={36} />
                    <Link href={link}>
                      <span className="text-[16px] leading-[16px] text-center font-semibold max-w-[580px] text-white">
                        Trade Now
                        <span className="inline-block transition-transform motion-reduce:transform-none ml-[12px]">-&gt;</span>
                      </span>
                    </Link>
                  </div>

                  {index < dataLength - 1 ? <div className="border-[1px] border-secondary" /> : <></>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* bg-gradient */}
        <div className="absolute w-[400px] h-[400px] chart-gradient -top-[250px] -right-[100px] -z-[2] rounded-full" />
      </div>
    </section>
  );
};

export default Chart;
