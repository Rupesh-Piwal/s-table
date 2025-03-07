"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  reverse?: boolean;
  highlightedText?: string;
  badgeText?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  imageSrc,
  buttonText,
  reverse = false,
  highlightedText = "Available anytime, anywhere",
  badgeText,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const textControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (inView) {
      textControls.start("visible");
      imageControls.start("visible");
    }
  }, [inView, textControls, imageControls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const getHighlightedText = () => {
    const sentences = description.split(". ");
    const lastSentence = sentences[sentences.length - 1];
    return lastSentence.endsWith(".") ? lastSentence : lastSentence + ".";
  };

  const mainText = description.replace(getHighlightedText(), "");

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center justify-between py-20 gap-16  ${
        reverse ? "bg-gray-50/50" : ""
      }`}
    >
      <motion.div
        initial="hidden"
        animate={textControls}
        variants={textVariants}
        className={`text-center lg:text-left max-w-xl ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "80px" } : { width: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-1 bg-black mb-4 hidden lg:block"
        />

        <h2 className="text-[28px] sm:text-4xl lg:text-[36px] font-semibold text-black mb-6">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-[#7B7B7B] leading-relaxed">
          {mainText}
          <span className="text-black font-medium">
            {" "}
            {getHighlightedText()}
          </span>
        </p>

        <motion.div
          className="mt-8 inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="#"
            className="group bg-black text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
          >
            {buttonText}
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
              className=" transition-opacity duration-300"
            >
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
        className={`w-full max-w-[580px] relative ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <motion.div
          className="absolute -inset-4 bg-gradient-to-tr from-[#7B7B7B]/15 to-transparent rounded-2xl blur-sm -z-10"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-[#7B7B7B]/20 to-transparent rounded-2xl transform -translate-x-3 -translate-y-3 z-0"></div>

        <motion.div
          className="relative z-10 overflow-hidden rounded-2xl shadow-lg"
          whileHover={{
            y: -8,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
            },
          }}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={540}
            height={540}
            className="w-full h-auto object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-6 px-4 text-white">
            <p className="text-sm font-medium">{highlightedText}</p>
          </div>

          {badgeText && (
            <motion.div
              className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full shadow-md text-xs font-semibold text-black"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              {badgeText}
            </motion.div>
          )}
        </motion.div>

        <motion.div
          className={`absolute ${
            reverse ? "right-[-20px]" : "left-[-20px]"
          } bottom-[-20px] w-16 h-16 rounded-full bg-[#7B7B7B]/10 z-0`}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

const Sections: React.FC = () => {
  return (
    <div className="space-y-8">
      <Section
        title="Unlimited Practice Sessions"
        description="For topics and subjects you go through in your school and coaching every day, we create instant practice sessions specially made for your daily needs. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions. It's like having a home tutor, available 24×7."
        imageSrc="/section-1.png"
        buttonText="Start Practicing"
        badgeText="AI-Powered"
      />

      <Section
        title="Personalized Assessment"
        description="We measure your learning differently. Not just comparing you among your classmates and peers rather, how much you have learnt and how much have your skills in each subject have grown. We create tests based on your learning session and exam requirements to understand and modify study plans for you. The tests are uniquely created for each student to improve and advance their respective knowledge."
        imageSrc="/section-2.png"
        buttonText="Explore Learning Paths"
        reverse={true}
        highlightedText="Personalized for your growth"
        badgeText="Adaptive Learning"
      />

      <Section
        title="Managing Students Academic Life"
        description="There is more to study than just practicing and giving tests. To meet the requirements of exams, we need to carefully do revision, repeatedly align our study plan and understand each student's learning curve. This all needs to be done along with school tests and other scholarship exams. We manage it all for you so that you focus on learning and worry no more."
        imageSrc="/section-3.png"
        buttonText="Resolve Doubts Now"
        highlightedText="Complete academic management"
        badgeText="Smart Planning"
      />
    </div>
  );
};

export default Sections;
