import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary py-36 flex items-center">
      {/* <Circles /> */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              My Work <span className="text-accent"> . </span>{" "}
            </motion.h2>{" "}
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Here are some of the projects I have worked on, covering user
              interface design, system development, and modern technology
              integration. Each project reflects my ability to build functional
              and visually appealing solutions.
            </motion.p>
          </div>{" "}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] "
          >
            <WorkSlider />
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
      {/* <Bulb /> */}
    </div>
  );
};

export default Work;
