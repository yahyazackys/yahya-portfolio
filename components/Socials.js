import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiLineLine,
  RiGithubLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-lg">
      <Link
        href={"https://www.instagram.com/yahyazackys"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>{" "}
      <Link
        href={"https://github.com/yahyazackys"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>{" "}
      <Link
        href={"http://line.me/ti/p/~yahyaganss"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLineLine />
      </Link>{" "}
      <Link
        href={"https://wa.me/08127770242"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>{" "}
    </div>
  );
};

export default Socials;
