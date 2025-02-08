import Link from "next/link";
import React from "react";
import { PiShootingStarBold } from "react-icons/pi";

const NavItems = ({ feedlink, comlink, asklink, dashlink }) => {
  const commonStyles = `hover:border-b  pb-1 hover:font-semibold`;
  return (
    <ul className="text-white text-xs flex gap-4">
      <li className={commonStyles}>
        <Link href={{ feedlink }}>Feed</Link>
      </li>
      <li className={commonStyles}>
        <Link href={{ comlink }}>Community</Link>
      </li>
      <li className={commonStyles}>
        <Link href="https://www.reddit.com/r/Psychiatry/">Ask</Link>
      </li>
      <li className={commonStyles}>
  <Link href="http://localhost:3000/patients/67a661410015cf19e720/new-appointment">
    New Appointement
  </Link>
</li>

    </ul>
  );
};

const NavBar = () => {
  return (
    <div className="border">
      <div className="flex justify-between items-center text-white py-5 px-10 bg-[#100c08]">
        {/* main nav contents */}
        <h1 className="text-lg font-semibold">
          <PiShootingStarBold className="inline-block text-2xl" /> Mental Health Forum
        </h1>
        {/* listed nav items  */}
        <NavItems></NavItems>
      </div>
      {/* gradient border */}
      <div className="h-1 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-300"></div>
    </div>
  );
};

export default NavBar;
