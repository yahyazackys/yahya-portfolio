// next image
import Image from "next/image";

//component
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary h-full">
      {" "}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[35px] leading-tight xl:text-[60px] md:leading-[1.3] mb-8 font-semibold animate-pulse duration-125"
          >
            Yahya{" "}
            <span className="text-accent font-extrabold animate-pulse duration-75">
              {" "}
              Zacky{" "}
            </span>{" "}
            Syahputra Gans{" "}
          </motion.h1>{" "}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mx-auto xl:max-w-xl xl:mx-0 mb-10 xl:mb-16"
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </motion.p>{" "}
          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>{" "}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {" "}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          {" "}
        </div>{" "}
        <ParticlesContainer />{" "}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          exit="hidden"
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
