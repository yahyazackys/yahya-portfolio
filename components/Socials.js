import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiWhatsappLine,
  RiLineLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-6 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>{" "}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>{" "}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLineLine />
      </Link>{" "}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine />
      </Link>{" "}
    </div>
  );
};

export default Socials;
