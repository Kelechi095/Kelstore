import Link from "next/link";
import Wrapper from "../Wrapper";
import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const bla = 'text-blue-500'

const Navbar = () => {

    
  return (
    <nav className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Wrapper>
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link href="/" className={`${redressed.className} font-bold text-2xl`}>
              KelStores
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu />
            </div>
          </div>
        </Wrapper>
      </div>
    </nav>
  );
};

export default Navbar;
