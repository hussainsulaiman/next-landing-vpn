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

const WhyChooseUs = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl bg-gradient-to-b from-gray-100 to-white-500 overflow-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="chooseUs"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>
          <motion.div
            className="flex flex-col  justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-900 leading-relaxed">
              Why Choose Us?
            </h3>
            <p className="my-2 text-black-500 ">
              Our comprehensive range of HR services is designed to help
              businesses like yours thrive by maximizing the potential of your
              most valuable asset, your people. Here’s what we offer:
            </p>
            <ul className="text-black-500  self-start list-inside ml-8">
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
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper
          className="flex w-full justify-end"
          layout="responsive"
        >
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            {/*   <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            /> */}
            <WhyChooseUsLottie className="sm: h-3 w-3" />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default WhyChooseUs;
