import React, { memo } from "react";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./WhyChooseUs.json";

const options = {
  animationData: groovyWalkAnimation,
  loop: true,
  autoplay: true,
};
function WhyChooseUsLottie() {
  const { View } = useLottie(options);

  return <>{View}</>;
}

export default memo(WhyChooseUsLottie);
