import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //   El efecto con arreglo vacío se ejecuta una sola vez por renderización del componente
  useEffect(() => {
    console.log("efecto arreglo vacio");
  }, []);
  //Este efecto se ejecutara cada vez que el componente se renderice
  useEffect(() => {
    console.log("efecto");
  });
  // Los dos useEffect de más abajo ocurren al renderizar un componente en específico
  useEffect(() => {
    console.log("use effect c1");
  }, [counter1]);
  useEffect(() => {
    console.log("use effect c2");
  }, [counter2]);
  //Este efecto se ejecutara si cambia uno de los dos componentes
  useEffect(() => {
    console.log("use effect c1 o c2");
  }, [counter1, counter2]);

  return (
    <div>
      <h1>Clicks c1: {counter1}</h1>
      <h1>Clicks c2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment 2</button>
    </div>
  );
};

export default LifeCycle;
