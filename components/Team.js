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
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

function TeamCard({ img, name, title, url }) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex !flex-row items-center gap-6"
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="!m-0 h-28 w-28 flex-shrink-0"
      >
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover object-center"
          href={url}
        />
      </CardHeader>
      <CardBody className="p-0">
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
        <Typography
          variant="small"
          className="mb-4 mt-2 font-bold uppercase !text-gray-600"
        >
          {title}
        </Typography>
        <div className="-ml-1 flex items-center gap-4">
          <IconButton variant="text" size="sm" color="gray">
            <i className="fa-brands fa-facebook text-lg" />
          </IconButton>
          <IconButton variant="text" size="sm" color="gray">
            <i className="fa-brands fa-twitter text-lg" />
          </IconButton>
          <IconButton variant="text" size="sm" color="gray">
            <i className="fa-brands fa-dribbble text-lg" />
          </IconButton>
        </div>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: `/assets/TeamMember1.jpeg`,
    name: "Ahmed Ibrahim",
    title: "Managing Partner People First LLP",
    url: "https://www.linkedin.com/in/ahmed-ibrahim-mcipd/"
  },
  {
    img: `/assets/TeamMember2.png`,
    name: "Aishath Sama MCIPD",
    title: "Partner- People First LLP",
    url: "https://www.linkedin.com/in/aishsama/"
  },
  
 
];

export function TeamSection11() {
  return (
    <section className="py-10 px-8 lg:py-28">
      <div className="container mx-auto grid grid-cols-1 place-content-center items-start gap-y-12 xl:grid-cols-12">
        <div className="col-span-4 mb-2">
         
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 mt-6 text-3xl !leading-snug lg:text-4xl"
          >
            Discover Our Team
          </Typography>
          <Typography
            variant="lead"
            className="font-normal !text-gray-500"
          >
           Your Partner in Strategic HR Solutions
          </Typography>
        </div>
        <div className="col-span-8 grid gap-x-28 gap-y-10 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-20 xl:ml-auto">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection11;