import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import WhyChooseUsLottie from "./WhyChooseUsLottie";

const features = [
  "Professional Expertise and Experience.",
  "Customized Services.",
  "Comprehensive Services",
  "Client-Centric Focus.",
  "Continuous Development.",
  "Budget-Friendly.",
  "Innovative Approach.",
  "Confidentiality and Trust.",
];

const WhoWeAre = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl  overflow-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="chooseUs"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper
          className="flex w-full justify-end"
          layout="responsive"
        >
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.jpeg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={120}
              width={200}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col  justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-900 leading-relaxed">
              Who we are
            </h3>
            <p className="my-2 text-black-500 ">
              People First HR Consultancy was established as an HR consultancy
              company with a focus on delivering the full benefits of
              integrating result-oriented HR services to clients.
            </p>
            <p className="my-2 text-black-500 ">
              By partnering with us, clients gain a competitive advantage in
              their industry and set themselves on the path to achieving their
              long-term business objectives.
            </p>
            <p className="my-2 text-black-500 ">
              We simplify the complex and daunting process of HR management,
              providing a level of service with a performance-driven company.
            </p>
            {/*  <ul className="text-black-500  self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul> */}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default WhoWeAre;
