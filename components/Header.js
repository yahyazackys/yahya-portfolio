import Image from "next/image";

import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] mt-6 xl:mt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6">
          <Link href={"/"}>
            {" "}
            <h1 className="text-[25px] leading-tight md:text-[30px] md:leading-[1.3] font-semibold">
              {" "}
              yahya{" "}
              <span className="font-poppins font-thin text-[25px] leading-tight md:text-[30px] md:leading-[1.3]">
                {" "}
                portfolio.{" "}
              </span>{" "}
            </h1>{" "}
          </Link>{" "}
          <Socials />
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
