import { companyLinks, privacyLink } from "@/constants";
import Link from "next/link";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="py-[100px] z-[1] bg-[#0B0B0F33] border-t-[1px] border-t-[#3F3E45]">
      <div className="container max-w-6xl mx-auto w-full h-full relative">
        <div className="grid grid-cols-12 md:gap-[24px] gap-8 mt-[24px]">
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col gap-[24px]">
              <Link href="/" className="flex items-center gap-4">
                <span className="text-[24px] font-extrabold leading-[31.2px] text-secondary font-syne">Flip</span>
              </Link>
              <p className="text-[14px] leading-[21px] text-secondary max-w-[380px]">
                Flip, the world’s leading bitcoin ATM operator, makes it so flippin’ easy to buy and sell bitcoin via cash, card,
                or bank transfer. Sign up to get the latest in Flip news, discounts, and more.
              </p>
              <p className="text-[14px] leading-[21px] text-secondary max-w-[380px]">
                Sign up to get the latest in Flip news, discounts, and more.
              </p>

              <div className="wrapper border border-primary rounded-[10px] flex items-center justify-between px-[16px]">
                <input className="text-white bg-transparent" placeholder="Email Address" />
                <span className="inline-block transition-transform motion-reduce:transform-none text-secondary">-&gt;</span>
              </div>
              <p className="text-[12px] leading-[18px] text-secondary">
                Ⓒ {new Date().getFullYear()} GPD Holdings, LLC FinCEN MSB.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="flex flex-col gap-[24px]">
              <span className="text-[14px] leading-[14px] font-semibold text-secondary">Quick Links</span>
              <ul className="flex flex-col gap-[24px]">
                {companyLinks.map(({ id, link, title }) => (
                  <Link key={id} href={link}>
                    <span className="text-[14px] leading-[21px] text-secondary">{title}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="flex flex-col gap-[24px]">
              <span className="text-[14px] leading-[14px] font-semibold text-secondary">Privacy Policy and Terms of Service</span>
              <ul className="flex flex-col gap-[24px]">
                {privacyLink.map(({ id, link, title }) => (
                  <Link key={id} href={link}>
                    <span className="text-[14px] leading-[21px] text-secondary">{title}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* bg-gradient */}
        <div className="absolute w-[400px] h-[400px] footer-gradient -bottom-[100px] -left-[50px] -z-[2] rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
