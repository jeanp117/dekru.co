"use client";
import { useLottie } from "lottie-react";
import bienvenida from "../../././../public/bienvenida.json";

export const LogoAnimado: React.FC<{
  loop?: boolean;
}> = ({ loop }) => {
  const options = {
    animationData: bienvenida,
    loop: loop || false,
    onComplete: () => {
      //wait  1 second
      setTimeout(() => {}, 1000);
    },
  };

  const { View } = useLottie(options);

  return <div>{View}</div>;
};
