import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import LogoVPN from "../public/assets/service-1.svg";

const Services = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const ServiceOfferings = [
    {
      serviceImage: "/assets/service-1.svg",
      serviceHeading: "Job Architecture and Job Levelling",
      serviceDes:
        "Creates a structured and equitable framework for managing job roles, career development, and compensation within an organization",
    },
    {
      serviceImage: "/assets/service-1.jpg",
      serviceHeading: "Total Rewards Advisory services",
      serviceDes:
        "Creates a structured and equitable framework for managing job roles, career development, and compensation within an organization",
    },
    {
      serviceImage: "/assets/service-1.jpg",
      serviceHeading: "Implementing Effective Performance Management System",
      serviceDes:
        "Creates a structured and equitable framework for managing job roles, career development, and compensation within an organization",
    },

    {
      serviceImage: "/assets/service-1.jpg",
      serviceHeading: "Agile Culture Transformation",
      serviceDes:
        "Creates a structured and equitable framework for managing job roles, career development, and compensation within an organization",
    },
    {
      serviceImage: "/assets/service-1.jpg",
      serviceHeading: "Human Skill and Leadership Development Programs",
      serviceDes:
        "Creates a structured and equitable framework for managing job roles, career development, and compensation within an organization",
    },
    {
      serviceImage: "/assets/service-1.jpg",
      serviceHeading: "HR Transformation",
      serviceDes:
        "Creates a structured and equitable framework for managing job roles, career development, and compensation within an organization",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="services"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Our Services
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto py-8 my-2 text-center"
            ></motion.p>
          </ScrollAnimationWrapper>

          <div className="grid grid-flow-row gap-8 text-neutral-600 text-left sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ServiceOfferings.map((ServiceOffering, index) => (
              <ScrollAnimationWrapper className="flex ">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col  items-center border-2 border-gray-500 rounded-xl "
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <a className="py-10 " href="#">
                    <LogoVPN className="h-10  w-auto" />
                  </a>

                  <div class="p-5">
                    <a href="#">
                      <p className="text-lg h-24  text-black-600 font-medium capitalize my-2 sm:my-7">
                        {ServiceOffering.serviceHeading}
                      </p>
                    </a>
                    {/*  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {ServiceOffering.serviceDes}
                    </p> */}
                  </div>
                  <div className="flex flex-col  justify-center mb-12 flex-none mt-2">
                    <ButtonOutline>Read more</ButtonOutline>
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
