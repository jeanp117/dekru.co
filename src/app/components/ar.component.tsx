"use client";
import { useLottie } from "lottie-react";
import ar from "../../../public/ar.json";

export const ARLottie: React.FC<{
  loop?: boolean;
}> = ({ loop }) => {
  const options = {
    animationData: ar,
    loop: loop || false,
    onComplete: () => {
      //wait  1 second
      setTimeout(() => {}, 1000);
    },
  };

  const { View } = useLottie(options);

  return <div>{View}</div>;
};
