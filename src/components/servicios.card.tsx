export const CardServicio: React.FC<{
  title: string;
  subtitle: string;
  icon: string;
}> = ({ title, subtitle, icon }) => {
  return (
    <div className="   rounded-2xl vidrio p-3 md:p-6 text-white  text-left relative ">
      <div className=" w-full  absolute -top-24 md:-top-28 left-0  max-h-[250px] align-middle text-center flex justify-center ">
        <img
          src={icon}
          alt={title}
          className=" scale-[80%] md:scale-100  md:w-auto  "
        />
      </div>
      <div className="mt-[3em] md:mt-[100px] flex-col gap-10">
        <h3 className=" text-2xl md:text-3xl font-black text-left">{title}</h3>
        <h4 className="mt-3">{subtitle}</h4>
      </div>
    </div>
  );
};
