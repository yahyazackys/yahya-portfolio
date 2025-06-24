"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import ProjectModal from "./ProjectModal";

// --- DATA PROJECTS ---
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "STIT Muara Enim",
          path: "/stitmuaraenim.png",
          type: "Website",
          description:
            "Sistem informasi akademik berbasis web untuk kampus STIT Muara Enim, mendukung pengelolaan data mahasiswa, dosen, dan perkuliahan.",
          link: "-",
          tools: ["Laravel", "MySQL", "Bootstrap"],
        },
        {
          title: "Hayed App",
          path: "/hayed.png",
          type: "Mobile App",
          description:
            "Aplikasi manajemen kegiatan harian yang membantu pengguna menyusun dan melacak aktivitas secara produktif.",
          link: "https://hayedapp.vercel.app",
          tools: ["Flutter", "Firebase", "Figma"],
        },
        {
          title: "Saving Money",
          path: "/savingmoney.png",
          type: "Mobile App",
          description:
            "Aplikasi untuk mencatat dan mengelola keuangan pribadi secara efisien dan sederhana.",
          link: "-",
          tools: ["React Native", "SQLite"],
        },
        {
          title: "Yatask",
          path: "/yatask.png",
          type: "Website",
          description:
            "Sistem manajemen tugas tim berbasis web dengan fitur kolaborasi dan real-time update.",
          link: "https://yatask.app",
          tools: ["Next.js", "MongoDB", "TailwindCSS"],
        },
      ],
    },
    {
      images: [
        {
          title: "Yahya Portfolio",
          path: "/yahyaportfolio.png",
          type: "Website",
          description:
            "Website portofolio pribadi yang menampilkan proyek dan pengalaman kerja secara interaktif.",
          link: "https://yahya.dev",
          tools: ["Next.js", "Tailwind", "Framer Motion"],
        },
        {
          title: "EMDI",
          path: "/emdi.png",
          type: "Website",
          description:
            "Sistem dashboard berbasis web untuk monitoring data pelatihan, peserta, dan pencapaian.",
          link: "-",
          tools: ["PHP", "MySQL", "Chart.js"],
        },
      ],
    },
  ],
};

// --- SLIDER + MODAL ---
const WorkSlider = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlider.slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, j) => (
                <div
                  key={j}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  onClick={() => setSelectedProject(image)}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image
                      alt={image.title}
                      src={image.path}
                      width={500}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[rgba(65,47,123)] via-[rgba(89,65,169)] opacity-0 group-hover:opacity-80 transition-all duration-700" />
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] xl:text-[15px] tracking-[0.2em]">
                        <div className="delay-100 uppercase">Live</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 uppercase">
                          Project
                        </div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 text-xl transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal
            key="project-modal"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WorkSlider;
