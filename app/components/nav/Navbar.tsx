import Link from "next/link";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Categories from "./Categories"
import SearchBar from "../SearchBar";
import SmallScreenSearch from "./SmallScreenSearch";

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <nav className="w-full shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4 py-1">
          <div className="flex items-center justify-between gap-3 md-gap-0">
            <Link href="/" className="font-bold text-2xl md:text-3xl text-rose-400">
              KelStores
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
      <SmallScreenSearch />
      <Categories />
    </nav>
  );
};

export default Navbar;
