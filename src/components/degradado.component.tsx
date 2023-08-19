export const Degradado: React.FC<{
  estilo?: React.CSSProperties;
}> = ({ estilo }) => {
  return (
    <div
      className="frame-512"
      style={{
        position: "absolute",
        zIndex: -1,
        height: "677px",
        left: "0%",
        ...estilo,
      }}
    ></div>
  );
};
