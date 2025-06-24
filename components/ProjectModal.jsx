"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import {
  FiExternalLink,
  FiTool,
  FiCalendar,
  FiFileText,
  FiGlobe,
} from "react-icons/fi";
import { fadeIn } from "../variants";
import { FaFirefoxBrowser } from "react-icons/fa";
import Image from "next/image";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-full max-w-6xl rounded-3xl shadow-2xl relative border border-gray-700/50 overflow-hidden backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-6 right-6 z-20 w-12 h-12 bg-gray-800/90 hover:bg-red-500/20 rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-300 border border-gray-600/30 hover:border-red-500/30 backdrop-blur-sm group"
        >
          <AiOutlineClose className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="p-8 md:p-10 text-white relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image section */}
            <div className="flex-1">
              <div className="relative group">
                <Image
                  src={project.path}
                  alt={project.title}
                  className="rounded-2xl w-full shadow-2xl border border-gray-600/30 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Content section */}
            <div className="flex-1 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {project.title}
                </h2>
                <div className="flex items-center gap-1 w-full max-w-md">
                  <div className="h-1 flex-[0.15] bg-gradient-to-r from-accent to-primary rounded-full" />
                  <p className="text-sm font-medium text-gray-400 whitespace-nowrap">
                    {project.type}
                  </p>
                  <div className="h-1 flex-[0.15] bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>

              {/* Description */}
              <div className="p-4 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-xl backdrop-blur-sm border border-gray-600/30">
                <h3 className="text-accent font-semibold mb-2 text-sm uppercase tracking-wide">
                  Description
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.link !== "-" ? (
                <div className="space-y-3">
                  <h3 className="text-accent font-semibold flex items-center gap-2 text-sm uppercase tracking-wide">
                    <FiGlobe className="w-4 h-4" />
                    Link
                  </h3>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 transition-all duration-300 rounded-lg border border-blue-500/30 hover:border-blue-400/50 group"
                  >
                    <span className="truncate max-w-xs">{project.link}</span>
                  </a>
                </div>
              ) : (
                <span></span>
              )}

              <div className="space-y-3">
                <h3 className="text-accent font-semibold flex items-center gap-2 text-sm uppercase tracking-wide">
                  <FiTool className="w-4 h-4" />
                  Tools & Technology
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-full hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 cursor-default group"
                    >
                      <span className="group-hover:text-accent transition-colors duration-300">
                        {tool}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent" />
      </motion.div>
    </div>
  );
};

export default ProjectModal;
