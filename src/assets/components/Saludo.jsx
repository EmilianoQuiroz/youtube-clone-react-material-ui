const Saludo = ({ name, lastname, children }) => {
  return (
    <>
      <h1>
        Saludos {name} {lastname}
      </h1>
      {children}
    </>
  );
};
export default Saludo;
