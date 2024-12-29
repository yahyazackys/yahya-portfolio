import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none bg-blend-color-dodge">
      <Image
        src={"/yahya-nonbg.png"}
        width={1037}
        height={908}
        alt=""
        className="translate-x-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
