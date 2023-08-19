import { TarjetaPortafolio } from "./portafolio.card";

export const Grilla = () => {
  return (
    <div className="grid  grid-cols-12  gap-4 md:gap-8   ">
      <TarjetaPortafolio
        video="./portafolio/happy"
        badge="Realidad virtual"
        title="./portafolio/happy.svg"
        className=" col-span-12 md:col-span-8  aspect-[800/500]  "
        onClick={() => {
          window.open(
            "https://hubs.mozilla.com/inozWQb/spiteful-bubbly-park",
            "_blank"
          );
        }}
      />
      <TarjetaPortafolio
        image="./portafolio/xeminis.png"
        badge="Sitio web"
        title="./portafolio/xeminis.svg"
        className=" col-span-6 md:col-span-4"
        imageAlignment="top"
        onClick={() => {
          window.open("https://xeminis.org", "_blank");
        }}
      />
      <TarjetaPortafolio
        image="./portafolio/cdu.png"
        imageAlignment="top"
        badge="App móvil"
        title="./portafolio/cdu.svg"
        className=" col-span-6 md:col-span-4 aspect-[400/500]"
      />
      <TarjetaPortafolio
        video="./portafolio/rs"
        badge="Sitio web"
        title="./portafolio/rs.svg"
        className=" col-span-12 md:col-span-8  aspect-[800/500]  "
        onClick={() => {
          window.open("https://rsabogados.com", "_blank");
        }}
      />

      <TarjetaPortafolio
        image="./portafolio/faru.png"
        imageAlignment="top"
        badge="Landing"
        title="./portafolio/faru.svg"
        className=" col-span-4 md:col-span-4"
        onClick={() => {
          window.open("https://farudigital.com", "_blank");
        }}
      />
      <TarjetaPortafolio
        image="./portafolio/measurement.png"
        badge="Software empresarial"
        title="./portafolio/measurement.svg"
        className=" col-span-8 md:col-span-8    aspect-[800/500]  "
        onClick={() => {
          window.open("https://measurementequipment.com.co", "_blank");
        }}
      />
    </div>
  );
};
