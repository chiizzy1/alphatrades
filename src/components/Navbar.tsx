import Link from "next/link";
import { navLinks } from "@/constants";
import { Button } from "./ui/Button";

const Navbar = () => {
  return (
    <nav className={`flex items-center justify-between z-50 transition-all ease-in-out`}>
      <div className="container max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center transition py-[20px]">
          <Link href="/">
            <span className="text-[24px] font-extrabold leading-[31.2px] text-white font-syne">Flip</span>
          </Link>

          <div className="flex items-center gap-[32px]">
            {navLinks.map(({ id, title, link }) => (
              <ul key={id}>
                <Link href={link}>
                  <span className="text-[14px] leading-[14px] font-semibold text-white">{title}</span>
                </Link>
              </ul>
            ))}
          </div>

          <div className="flex items-center gap-[12px]">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
