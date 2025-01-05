import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiLineLine,
  RiGithubLine,
  RiLinkedinLine,
  RiLinkedinBoxLine,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiGameFill,
} from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import { SiGmail } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-lg">
      <Link
        href={"https://www.instagram.com/yahyazackys"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://github.com/yahyazackys"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/yahyazackys/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://wa.me/+60163177467"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"mailto:yahyazacky123456@gmail.com"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <BiLogoGmail />
      </Link>
    </div>
  );
};

export default Socials;
