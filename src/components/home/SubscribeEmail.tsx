import { FC } from "react";
import Link from "next/link";

interface SubscribeEmailProps {}

const SubscribeEmail: FC<SubscribeEmailProps> = ({}) => {
  return (
    <section className="pt-[86.5px] pb-[126.5px] z-[1]">
      <div className="container max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-[32px]">
            <div className="flex flex-col items-center gap-[16px]">
              <h2 className="text-[40px] font-extrabold leading-[52px] text-center max-w-[780px] text-white font-syne">
                Receive transmissions
              </h2>
              <p className="text-[16px] leading-[24px] text-center font-normal max-w-[580px] text-secondary">
                Unsubscribe at any time.{" "}
                <Link href="/">
                  <span className="text-white">Privacy policy↗</span>
                </Link>
              </p>
            </div>
            <div className="wrapper border border-primary rounded-[10px] flex items-center justify-between px-[16px]">
              <input className="text-white bg-transparent" placeholder="Email Address" />
              <span className="inline-block transition-transform motion-reduce:transform-none text-secondary">-&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeEmail;
