"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: {
    quote: string;
    name: string;
    designation: string;
    src: string;
  }[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const rotateForIndex = (index: number) => {
    const rotations = [-7, 4, -4, 8, -2, 6, -9, 3, -5, 7];
    return rotations[index % rotations.length];
  };

  return (
    <div className="max-w-sm md:max-w-5xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10 relative z-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <div className="relative h-80 w-full perspective-1000">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotateForIndex(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotateForIndex(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -40, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotateForIndex(index),
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  {/* Using standard img tag to bypass Next.js image domain config for Unsplash placeholders */}
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border border-white/10 shadow-[0_0_40px_rgba(242,105,74,0.1)]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-1">
              {testimonials[active].name}
            </h3>
            <p className="text-sm font-medium text-kx-orange-400 mb-8">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg md:text-xl text-kx-muted leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word === "Kaizen" || word === "AI" ? (
                    <span className="text-white font-medium">{word}</span>
                  ) : (
                    word
                  )}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 mt-10 md:mt-0">
            <button
              onClick={handlePrev}
              className="h-12 w-12 rounded-full bg-kx-surface-800 border border-white/10 flex items-center justify-center group/button hover:bg-white/5 hover:border-kx-orange-400/30 transition-all shadow-lg"
            >
              <ArrowLeft className="h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-12 rounded-full bg-kx-surface-800 border border-white/10 flex items-center justify-center group/button hover:bg-white/5 hover:border-kx-orange-400/30 transition-all shadow-lg"
            >
              <ArrowRight className="h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
