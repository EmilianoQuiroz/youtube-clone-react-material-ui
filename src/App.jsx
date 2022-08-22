import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Saludo from "./assets/components/Saludo";

//--- COMPONENTES ---//

/*Las aplicaciones en React se construyen mediante componentes. 
El potencial de este funcionamiento consiste en que podemos crear aplicaciones completas de una manera modular y de fácil mantenimiento, a pesar de su complejidad.*/

//--- DISEÑO MODULAR ---//
/*Los componentes permiten separar la interfaz de usuario en piezas independientes, reutilizables y pensar en cada pieza de forma aislada.
Al desarrollar crearemos componentes para resolver pequeños problemas, que son fáciles de visualizar y comprender.
Luego, unos componentes se apoyarán en otros para solucionar problemas mayores y al final la aplicación será un conjunto de componentes que trabajan entre sí.

Este modelo de trabajo tiene varias ventajas, como la facilidad de mantenimiento, depuración, escalabilidad, etcétera.
*/

//--- VENTAJAS DEL ENFOQUE ---//
/*
-Favorece la separación de responsabilidades: cada componente debe tener una única tarea.
-Al tener la lógica de estado y los elementos visuales por separado, es más fácil reutilizar los componentes.
-Se simplifica la tarea de hacer pruebas unitarias.
-Puede mejorar el rendimiento de la aplicación.
-La aplicación es más fácil de entender. 
*/

//--- COMPONENTES ---//
/*
En React JS existen dos maneras de entender los componentes, que varían según desde dónde nos paremos para analizarlo.
Vamos a decir que existen tipos de componentes y patrones.
La confusión se acentúa cuando no somos capaces de identificar las diferencias.
Los dividiremos en estas dos representaciones, que después servirán de base para implementar múltiples patrones. 

PUNTOS EN COMÚN
-Pueden recibir propiedades (props).
-Tienen la capacidad de hacer render de un único elemento*.
*/

//--- PROPIEDADES ---//
/*
Las propiedades son la forma que tiene React para pasar parámetros de un componente superior a sus children.

Es la manera de implementar el flujo de datos unidireccional.

Si alguna prop es una función, el child component puede llamarla para provocar efectos secundarios en el parent.

this.props.nombre contendrá el valor pasado en la propiedad "nombre" y this.props.app el valor de la propiedad "app".
Nuestras propiedades se encuentran encerradas entre llaves { }
Las llaves son importantes, porque es la manera con la que se escapa un código JSX, permitiendo colocar dentro sentencias Javascript "nativo". 
Aquello que devuelvan esas sentencias se volcará como contenido en la vista.
*/

//--- PATRONES ---//
//--- COMPONENTES DE PRESENTACIÓN ---//
/*
Son aquellos que simplemente se limitan a mostrar datos y tienen poca o nula lógica asociada a manipulación del estado (por eso son también llamados stateless components).
*/
//--- COMPONENTES DE PRESENTACIÓN ---//
/*
-Orientados al aspecto visual.
-No tienen dependencia con fuentes de datos (ej. Flux).
-Reciben callbacks por medio de props.
-Pueden ser descritos como componentes funcionales.
-Normalmente no tienen estado.

Los componentes de presentación usualmente no tienen estado, por eso hace más sentido utilizar más simplemente function based componentes. 
Todo componente puede recibir de su parent (superior), props y children.
(Aunque no sea obligatorio).
La ventaja más evidente de estos componentes es la posibilidad de reutilizarlos siempre que queramos, sin tener que recurrir a escribir el mismo código una y otra vez.
*/

//--- COMPOSICIÓN DE COMPONENTES ---//
//--- COMPONENTES CONTENEDORES ---//
/*
Tienen como propósito encapsular a otros componentes
y proporcionarles las propiedades que necesitan. 
Además se encargan de modificar el estado de la aplicación para que el usuario vea el cambio en los datos (por eso son también llamados state components).

-Orientados al funcionamiento de la aplicación.
-Contienen componentes de presentación y/u otros contenedores.
-Se comunican con las fuentes de datos. 
-Usualmente tienen estado para representar el cambio en los datos.

Este tipo de componentes será el encargado de realizar llamadas a las API’s externas y/o establecer la lógica a realizar, en función de las acciones que realice el usuario sobre la interfaz.
*/

//--- CHILDREN ---//
/*
Children es una manera que tiene react de permitirnos proyectar/transcluir uno o más componentes dentro otro.

<Component>
<ChildComponent/>
</Component>

*/
function App(props) {
  const mensaje = "Bienvenido a mi app";
  const estilos = {
    backgroundColor: "#888",
    padding: "20px",
  };

  return (
    <>
      <h1>Hola React</h1>
      <strong>Otro mensaje</strong>
      <h3 style={estilos}>{mensaje}</h3>
      <Saludo name="Santiago" lastname="Quiroz">
        <p>Este es un componente children</p>
      </Saludo>
      <Saludo name="Santiago" lastname="Quiroz" />
      <Saludo name="Santiago" lastname="Quiroz">
        <li>Este es otro elemento children</li>
      </Saludo>
      <Saludo name="Santiago" lastname="Quiroz" />
    </>
  );
}

export default App;
