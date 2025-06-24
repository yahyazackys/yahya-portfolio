/* eslint-disable react/jsx-key */
import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaLaravel,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiVuedotjs,
  SiPhp,
  SiPhpmyadmin,
  SiMamp,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiCodeigniter,
} from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Front End Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <SiVuedotjs />,
        ],
      },
      {
        title: "Back End Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaLaravel />,
          <SiCodeigniter />,
          <SiPhp />,
          <SiPhpmyadmin />,
          <SiMamp />,
        ],
      },
      {
        title: "Mobile Development",
        icons: [<SiFlutter />, <SiDart />],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: "Certification",
    info: [
      {
        title: "Fullstack Website Developer - Synapse Academy",
        stage: "2022",
      },
      {
        title: "Website Programming - Cyborg IT Center",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Fullstack Developer (Web & Mobile) - Difitech",
        stage: "2024",
      },
      {
        title: "Fullstack Web Developer - Hayed Consulting",
        stage: "2024",
      },
      {
        title: "Intern - Bea Cukai",
        stage: "2023",
      },
      {
        title: "Mobile Developer - Desa Gelebak Dalam",
        stage: "2022",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Informatics Management - POLSRI",
        stage: "2020-2023",
      },
      {
        title: "BICT - MSU",
        stage: "2023-2024",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="w-full h-full bg-primary py-32 text-center xl:text-left">
      {/* <Circles /> */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -left-[700px] -bottom-[400px]"
      >
        <Avatar />
      </motion.div>{" "} */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {" "}
        {/* text */}{" "}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Behind the <span className="text-accent">code</span> is a creative
            mind.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] mx-auto xl:mx-0 mb-10 xl:mb-12 xl:-x-0"
          >
            I am a software engineer focused on full-stack website and mobile
            development, with approximately 2 years of professional experience.
            I emphasize clean code and create effective, efficient code in
            building APIs, design systems, and reusable components.
          </motion.p>{" "}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={6} delay={2} /> +{" "}
                </div>{" "}
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100%]">
                  {" "}
                  Years Of Experience{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={6} delay={2} /> +{" "}
                </div>{" "}
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100%]">
                  {" "}
                  Projects{" "}
                </div>{" "}
              </div>{" "}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={6} delay={2} /> +{" "}
                </div>{" "}
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100%]">
                  Programming Languange{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
        {/* info */}{" "}
        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col  w-full xl:max-w-[40%] h-[400px]"
        >
          {" "}
          {/* title */}{" "}
          <div className="flex mx-auto gap-x-4 xl:gap-x-8 xl:mx-0 mb-4">
            {" "}
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:focus:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-[50%] after:h-[2px] hover:text-accent after:hover:bg-accent after:hover:w-[100%] after:transition-all after:duration-300 after:bg-white transition-all duration-300 after:absolute after:-bottom-2 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
          {/* content */}{" "}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {" "}
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col flex-1 md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light"> {item.title} </div>{" "}
                  <div className="hidden md:flex"> - </div>{" "}
                  <div> {item.stage} </div>{" "}
                  <div className="flex gap-x-4 text-2xl my-3 md:my-0 text-white">
                    {" "}
                    {item.icons}{" "}
                  </div>{" "}
                </div>
              );
            })}{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </div>
  );
};

export default About;
