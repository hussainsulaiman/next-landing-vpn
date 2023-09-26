import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Agile HR Solutions",

      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Strategic Workforce Planning",

      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Compensation Strategies",

      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-2xl xl:text-5xl font-medium text-black-600 leading-normal">
              Empowering Businesses Through Strategic{" "}
              <strong>HR Solutions</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              We are passionate about helping businesses achieve success through
              their most valuable asset- their people. We believe that every
              business is unique and has its own set of challenges and
              opportunities when it comes to managing human capital.
            </p>
            {/*  <ButtonPrimary>Get in Touch</ButtonPrimary> */}
          </div>
          <div className="  hidden lg:block">
            <motion.div
              className=" w-full hidden lg:block"
              variants={scrollAnimation}
            >
              <Image
                src="/assets/Illustration1.jpg"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative  w-full flex">
        <ScrollAnimationWrapper className="rounded-lg  align-self: center w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-4 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-left align-middle t sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto bg-orange-500 w-40 sm:w-auto">
                {/* <div className="flex items-center justify-center bg-gray-100 w-12 h-12 mr-6 rounded-full">
                  <img
                    src={listUsers.icon}
                    className="h-16 w-16 rounded-full"
                  />
                </div> */}
                <div className="flex bg flex-col">
                  <p className="text-xl sm:text-base align-middle justify-left lg:text-xl font-medium text-gray-600 leading-relaxed">
                    {listUsers.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
