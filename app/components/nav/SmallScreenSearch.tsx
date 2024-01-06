import React from "react";
import { MdSearch } from "react-icons/md";

const SmallScreenSearch = () => {
  return (
    <div className=" w-full mx-auto mt-2 py-1 px-4 bg-white flex gap-2 items-center md:hidden">
      <form className="mx-auto flex">
        <input
          type="text"
          className="outline-none w-full px-2 py-1 border border-slate-700"
          placeholder="Search Product"
        />
        <button className="bg-slate-600 text-white px-2">Search</button>
      </form>
    </div>
  );
};

export default SmallScreenSearch;
