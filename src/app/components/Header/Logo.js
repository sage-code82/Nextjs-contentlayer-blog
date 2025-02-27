import React from "react";
import Link from "next/link";
import Image from "next/image";
import profileImg from "@/public/Ork_Necron_Logo.PNG";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-3">
        <Image
          src={profileImg}
          alt="NoBeefJustParty"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">NoBeefJustParty</span>
    </Link>
  );
};

export default Logo;
