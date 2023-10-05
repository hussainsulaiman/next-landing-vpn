import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const SharedValues = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const SharedValues = [
    "Lead the way.",
    "Create genuine Heart connections.",
    "Serve with Professionalism",
    "Collaborate for measurable outcomes.",
    "Client-Centric Approach.",
    "Results-Oriented.",
    "Excellence.",
  ];

  return (
    <div
      className="bg-gradient-to-b from-white-300 content-center to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Our Shared Values{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              With our unmatched skills and service excellence, People First
              will lead the HR Profession and create great value for
              organizations to reinvent the future of workforce
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="py-12 w-full px-8 mt-16"
              variants={scrollAnimation}
            >
              <div
                className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
                id="feature"
              >
                <div className="grid grid-flow-row  sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
                  <ScrollAnimationWrapper
                    className="flex w-full justify-end"
                    layout="responsive"
                  >
                    <motion.div
                      className="h-full w-full p-4"
                      variants={scrollAnimation}
                    >
                      <Image
                        src="/assets/ImageSharedValues.jpg"
                        alt="VPN Illustrasi"
                        layout="responsive"
                        quality={100}
                        height={414}
                        width={508}
                      />
                    </motion.div>
                  </ScrollAnimationWrapper>
                  <ScrollAnimationWrapper>
                    <motion.div
                      className="flex flex-col items-end  ml-auto w-full lg:w-9/12"
                      variants={scrollAnimation}
                    >
                      <ul className="text-black-500 self-start list-inside ml-8">
                        {SharedValues.map((SharedValue, index) => (
                          <motion.li
                            className="relative circle-check  custom-list"
                            custom={{ duration: 2 + index }}
                            variants={scrollAnimation}
                            key={SharedValue}
                            whileHover={{
                              scale: 1.1,
                              transition: {
                                duration: 0.2,
                              },
                            }}
                          >
                            {SharedValue}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default SharedValues;
