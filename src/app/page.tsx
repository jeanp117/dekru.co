"use client";
import React, { useEffect, useRef, useState } from "react";

import { LogoAnimado } from "../components/bienvenida.component";
import { CardServicio } from "../components/servicios.card";
import { Footer, Whatsapp } from "../components/footer.component";
import { Grilla } from "../components/grid.component";
import { ARLottie } from "../components/ar.component";
import { Degradado } from "../components/degradado.component";

export default function Home() {
  return (
    <div>
      <main
        className="
      flex flex-col justify-center items-center  mt-6 md:mt-16
      md:max-w-6xl mx-auto
      px-4
      overflow-x-hidden
      md:overflow-x-visible
      "
      >
        <Degradado
          estilo={{
            top: "70vh",
          }}
        />

        <Header />

        <Hero />
        <section className="grid grid-cols-2   md:grid-cols-4 gap-4 gap-y-28 md:gap-y-4 relative   mt-32 md:mt-40 mb-16 ">
          <CardServicio
            title="Realidad virtual "
            subtitle="Actividades inmersivas y recorridos virtuales para tu negocio."
            icon="vr.png"
          />
          <CardServicio
            title="Realidad aumentada"
            subtitle="Experiencias publicitarias modernas al alcance de tu mano."
            icon="ar.png"
          />
          <CardServicio
            title="Sitios web y aplicaciones"
            subtitle="Tu idea cobra vida en webs y apps de calidad."
            icon="rocket.png"
          />
          <CardServicio
            title="Software a la medida"
            subtitle="Soluciones a la medida de tu empresa."
            icon="girl.png"
          />
        </section>
        <h2 className="  text-white text-3xl font-bold my-8 ">
          Últimos proyectos
        </h2>
        <Grilla />

        <ARLottie />
        <Whatsapp />
        <Footer />
      </main>
    </div>
  );
}

const Hero = () => {
  const negocios = [
    "idea",
    "tienda",
    "empresa",
    "negocio",
    "proyecto",
    "emprendimiento",
  ];
  const time = 1600;
  const [index, setIndex] = useState(0);

  //ref para el timeout

  const interval = useRef<any>(null);
  const interval2 = useRef<any>(null);

  const [palabra, setPalabra] = useState("");

  useEffect(() => {
    interval.current = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === negocios.length - 1 ? 0 : prevIndex + 1
      );
    }, time);
    return () => {
      clearInterval(interval.current);
    };
  }, [negocios, negocios.length]);

  useEffect(() => {
    let palabra = negocios[index];

    let i = 0;
    interval2.current = setInterval(() => {
      i++;
      let trozo = palabra.slice(0, i);
      setPalabra(trozo + "_");

      if (palabra === trozo) {
        setPalabra(trozo);
        clearInterval(interval2.current);
      }
    }, (time - 300) / palabra.length);

    return () => {
      clearInterval(interval2.current);
    };
  }, [index]);

  return (
    <div
      className="
    text-center flex flex-col items-center gap-[40px] mt-20 "
    >
      <div className="gap-0">
        <h1
          className="
          text-4xl
          md:text-[5rem]

    my-0
        font-bold
        text-white
      "
          style={{
            lineHeight: "1.2em",
          }}
        >
          Hacemos brillar
        </h1>
        <h1
          className=" text-4xl md:text-[5rem] textoDegradado 
        font-bold
        "
          style={{
            lineHeight: "1.4em",
          }}
        >
          tu {palabra}
        </h1>
      </div>
      <h1 className="text-white  text-xl    md:text-[34px] flex max-w-screen-sm  md:max-w-3xl font-medium">
        Sitios web y aplicaciones para tu negocio
      </h1>
      <img
        src="pc.png"
        className="pointer-events-none  mt-4    scale-150  md:scale-100 md:h-auto "
        alt="Sitios web y aplicaciones para tu negocio | Dekrú.co"
      />
    </div>
  );
};

const Header = () => {
  return (
    <nav className="bg-transparent   border-gray-200  w-full  ">
      <div className="  flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center  w-32 md:w-52">
          <LogoAnimado />
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="
            invisible
            md:visible
            text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contáctanos
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        ></div>
      </div>
    </nav>
  );
};
