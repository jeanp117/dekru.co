import { LogoAnimado } from "./bienvenida.component";
import { Degradado } from "./degradado.component";
import { useInView } from "react-intersection-observer";

const datos = {
  whatsapp: "3186674418",
  email: "hola@dekrú.co",
  instagram: "dekru.co",
};

export const Contactanos = () => {
  return (
    <div className="flex  w-full items-center  justify-center">
      <Degradado
      // estilo={{
      //   top: "0vh",
      //   overflow: "hidden",
      // }}
      />
      <div className=" glass   flex flex-row   vidrio p-6  md:py-16 md:px-20 gap-4 md:gap-8    mt-16 mb-16 rounded-3xl justify-left  relative w-full md:w-3/4 lg:w-5/6 ">
        <div className="flex flex-col gap-4 md:gap-8 text-white xs:max-w-xs">
          <h3 className="text-lg md:text-4xl font-bold">
            ¿Listo para llevar tu negocio <br /> al siguiente nivel?
          </h3>
          <a
            href={`https://wa.me/+57${datos.whatsapp}`}
            target="_blank"
            className="w-fit    bg-white text-black px-4 py-2 md:px-8 md:py-2 rounded-full md:text-2xl font-bold  "
          >
            Contáctanos
          </a>
        </div>

        <div className="absolute -right-4 md:right-6 -bottom-1 ">
          <img
            src="fulano.png"
            className=" w-32 md:w-56"
            alt="¿Listo para llevar tu negocio al siguiente nivel? | Dekrú.co"
          />
        </div>
      </div>
    </div>
  );
};

export const Whatsapp = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      onClick={() => {
        window.open(`https://wa.me/+57${datos.whatsapp}`, "_blank");
      }}
    >
      {inView && (
        <img
          src="wapp.svg"
          alt="Whatsapp de Dekrú.co"
          className=" fixed
  right-4 bottom-4 md:right-6 md:bottom-6 w-8 md:w-10 cursor-pointer
  "
        />
      )}
    </div>
  );
};

export const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div className="flex flex-col relative w-full justify-center items-center">
      <Contactanos />
      <footer className=" w-full rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className=" flex flex-col  items-center gap-y-8  md:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-52  " ref={ref}>
                {inView && <LogoAnimado loop={false} />}
              </div>
            </div>
            <div className="flex">
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li className="flex items-center gap-1 text-lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
                  </svg>
                  <a
                    href={`mailto:${datos.email}`}
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    Email
                  </a>
                </li>
                <li className="flex items-center gap-1 text-lg">
                  <svg
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  <a
                    href={`https://wa.me/+57${datos.whatsapp}`}
                    target="_blank"
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    {datos.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-1 text-lg">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 100 9.248 4.623 4.623 0 000-9.248zm0 7.627a3.004 3.004 0 110-6.008 3.004 3.004 0 010 6.008z" />
                    <path d="M17.884 7.207 A1.078 1.078 0 0 1 16.806 8.285 A1.078 1.078 0 0 1 15.728000000000002 7.207 A1.078 1.078 0 0 1 17.884 7.207 z" />
                    <path d="M20.533 6.111A4.605 4.605 0 0017.9 3.479a6.606 6.606 0 00-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 00-2.184.42 4.6 4.6 0 00-2.633 2.632 6.585 6.585 0 00-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 002.186-.419 4.613 4.613 0 002.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 00-.421-2.217zm-1.218 9.532a5.043 5.043 0 01-.311 1.688 2.987 2.987 0 01-1.712 1.711 4.985 4.985 0 01-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 01-1.669-.311 2.985 2.985 0 01-1.719-1.711 5.08 5.08 0 01-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 01.311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 011.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 011.67.311 2.991 2.991 0 011.712 1.712 5.08 5.08 0 01.311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                  </svg>
                  <a
                    href={`https://www.instagram.com/${datos.instagram}`}
                    target="_blank"
                    className="mr-4 hover:underline md:mr-  6 "
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex flex-col items-center gap-8">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://dekru.co/" className="hover:underline">
                Dekrú.co
              </a>
              . Desarrollado por <b>Dekrú.co</b>
            </span>

            <div className="flex flex-row gap-3 items-center">
              <div className="flex glass rounded-full overflow-hidden opacity-30 hover:opacity-100 cursor-pointer ">
                <img src="jean.png" className="w-12" />
              </div>
              <div className="flex glass rounded-full overflow-hidden opacity-30 hover:opacity-100 cursor-pointer ">
                <img src="silvia.png" className="w-12" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
