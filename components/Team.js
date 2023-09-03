import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Linkedin from "../public/assets/Icon/LinkedIn_icon.svg";

const Team = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const TeamMembers = [
    {
      teamMemberImage: "/assets/TeamMember1.png",
      teamMemberName: "Ahmed Ibrahim",
      teamMemberDesignation: "Managing Partner People First LLP",
      teamMemberLinkedin:
        "https://www.linkedin.com/in/ahmed-ibrahim-chartered-mcipd-cphr-5974b940/",
    },
    {
      teamMemberImage: "/assets/TeamMember2.png",
      teamMemberName: "Aishath Sama MCIPD",
      teamMemberDesignation: "Partner- People First LLP",
      teamMemberLinkedin:
        "https://www.linkedin.com/in/ahmed-ibrahim-chartered-mcipd-cphr-5974b940/",
    },
    {
      teamMemberImage: "/assets/TeamMember3.png",
      teamMemberName: "Yoosuf Hasnain",
      teamMemberDesignation: "Partner- People First LLP",
      teamMemberLinkedin:
        "https://www.linkedin.com/in/ahmed-ibrahim-chartered-mcipd-cphr-5974b940/",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="team"
    >
      <div className="max-w-screen-xl  px-2 sm:px-4 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Discover Our Team
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto py-8 my-2 text-center"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </motion.p>
          </ScrollAnimationWrapper>

          <div className="grid gap-10 mx-auto sm:grid-cols-2  lg:grid-cols-3 lg:max-w-screen-lg">
            {TeamMembers.map((TeamMember, index) => (
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
                  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                      <img
                        className="absolute object-cover w-full h-full rounded"
                        src={TeamMember.teamMemberImage}
                        alt="Person"
                      />
                    </div>
                    <div className="flex flex-col sm:text-center">
                      <p className="text-lg font-bold">
                        {TeamMember.teamMemberName}
                      </p>
                      <p className="mb-5 text-xs text-gray-800">
                        {TeamMember.teamMemberDesignation}
                      </p>
                      <div className="flex items-center space-x-3 sm:justify-center">
                        <a
                          href={TeamMember.teamMemberLinkedin}
                          className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5"
                          >
                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                          </svg>
                        </a>
                        <a
                          href={TeamMember.teamMemberLinkedin}
                          className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5"
                          >
                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                          </svg>
                        </a>
                      </div>
                    </div>
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

export default Team;
