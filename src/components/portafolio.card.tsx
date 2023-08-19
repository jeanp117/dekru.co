"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const TarjetaPortafolio: React.FC<{
  image?: string;
  badge: string;
  title: string;
  video?: string;
  aspectRatio?: string;
  columns?: number;
  imageAlignment?: "left" | "right" | "center" | "top" | "bottom";

  onClick?: () => void;
  className?: string;
}> = ({
  image,
  badge,
  title,
  video,
  aspectRatio = "auto",
  columns,
  imageAlignment = "bottom",
  onClick,
  className = "",
}) => {
  //function para detectar si el elemento esta en el viewport sin librerias externas a react js

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const videoRef = useRef<any | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [dirty, setDirty] = useState(false);
  //si esta en el viewport, esperar 1.5s y reproducir el video
  // si sale del viewport, pausar el video
  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
    setDirty(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };
  useEffect(() => {
    if (!videoRef.current) return;
    if (inView) {
      if (!dirty) {
        setTimeout(() => {
          playVideo();
        }, 1500);
      } else {
        playVideo();
      }
    } else {
      pauseVideo();
    }

    return () => {
      videoRef.current.pause();
      setIsPlaying(false);
    };
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${className} rounded-2xl overflow-hidden relative cursor-pointer`}
      onClick={onClick}
    >
      <div className="absolute bottom left-3 md:left-6 z-40 bottom-4 w-100 flex flex-col gap-4">
        <div className="">
          <span className="bagde-sm inline-flex items-center px-2.5 py-0.5 rounded-full text-md font-medium bg-white text-black">
            {badge}
          </span>
        </div>
        <img
          src={title}
          className="z-20  pointer-events-none    w-3/6  md:w-4/6  "
        />
      </div>

      {/* gradiente full width and height */}

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent z-10"></div>

      {video && (
        <video
          ref={videoRef}
          className="object-cover z-20 h-full"
          muted
          loop
          onEnded={() => {
            setIsPlaying(false);
          }}
          onPlay={() => {
            setIsPlaying(true);
            setDirty(false);
          }}
        >
          <source
            src={`/${video}_320p.mp4`}
            type="video/mp4"
            media="(max-width: 480px)"
          />
          <source
            src={`/${video}_420p.mp4`}
            type="video/mp4"
            media="(max-width: 720px)"
          />
          <source src={`/${video}.mp4`} type="video/mp4" />
        </video>
      )}

      {image && (
        <div
          className={`
      rounded-2xl w-full h-full p-8  flex gap-4 flex-col 
        align-bottom   relative  pointer-events-none
      `}
          style={{
            background: image
              ? `url(${image}) ${imageAlignment}/cover`
              : "black",
          }}
        ></div>
      )}
    </div>
  );
};
