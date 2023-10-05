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
      teamMemberImage: "/assets/TeamMember1.jpeg",
      teamMemberName: "Ahmed Ibrahim",
      teamMemberDesignation: "Managing Partner People First LLP",
      teamMemberLinkedin:
        "https://www.linkedin.com/in/ahmed-ibrahim-chartered-mcipd-cphr-5974b940/",
    },
    {
      teamMemberImage: "/assets/TeamMember2.png",
      teamMemberName: "Aishath Sama MCIPD",
      teamMemberDesignation: "Partner- People First LLP",
      teamMemberLinkedin: "https://www.linkedin.com/in/aishsama/",
    },
    {
      teamMemberImage: "/assets/TeamMember3.png",
      teamMemberName: "Yoosuf Hasnain",
      teamMemberDesignation: "Partner- People First LLP",
      teamMemberLinkedin: "https://www.linkedin.com/in/yoosufhasnain/",
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
              Your Partner in Strategic HR Solutions
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
                          target="blank"
                          className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
