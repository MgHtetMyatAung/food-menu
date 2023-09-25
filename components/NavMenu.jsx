import Link from "next/link";
import React from "react";

function NavMenu() {
  return (
    <div className=" shadow bg-white">
      <nav className=" container mx-auto flex justify-between items-center h-[60px] md:h-[70px]">
        <h2 className=" uppercase font-bold text-lg md:text-2xl">
          <Link href={"/"}>
            Holi <span className=" text-red-600">Foodie</span>
          </Link>
        </h2>
        <ul className=" flex items-center gap-5">
          <li className="  2xl:text-lg font-medium">
            <Link href={"/category/Seafood"}>Products</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavMenu;
