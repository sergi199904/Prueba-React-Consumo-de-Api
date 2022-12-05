import React, { useState } from 'react';

const Sort = ({ items, orderBy, updateItems }) => {
  // Seteo de los estados
  const [orderDirection, setOrderDirection] = useState("asc");

  // Funcion de ordenamiento
  const sortItems = () => {
    // creacion de un nuevo array con item a ordenar
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      if (orderDirection === "asc") {
        if (a[orderBy] < b[orderBy]) {
          return -1;
        }
        if (a[orderBy] > b[orderBy]) {
          return 1;
        }
      } else {
        if (a[orderBy] > b[orderBy]) {
          return -1;
        }
        if (a[orderBy] < b[orderBy]) {
          return 1;
        }
      }
 
      return 0;
    });
    // llamada a la funcion con el arreglo ordenado
    updateItems(sortedItems);
    // cambio de ordenamiento en sentido contrario
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  // Renderizacion de vista
  return (
    <div>
      <button onClick={sortItems}>
        Ordenar {orderDirection === "asc" ? "A-Z" : "Z-A"}
      </button>
    </div>
  );
};

export default Sort;
