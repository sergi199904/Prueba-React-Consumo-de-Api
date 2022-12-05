import React, { useState, useEffect } from 'react';
import Sort from './Sort';

const MiApi = () => {
  // Seteo de estados 
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Llamado a Api se utiliza Api {JSON} Placeholder

      const URL = 'https://jsonplaceholder.typicode.com/users';
      const showData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
  };


  //funcion de busqueda

  const searcher = (e) =>{
  setSearch(e.target.value)
  //console.log(e.target.value)
}

//metodo de filtrado POR NOMBRE 

  let results =[]
  if(!search){
    results = users
  }else{
  results = users.filter((dato) =>
  dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
  }


  // LLamado de funcion para actualizar lista de usuarios con el ordenamiento A-z Z-A
  const updateUsers = (newUsers) => {
    setUsers(newUsers);
  };

  useEffect(() => {
    showData();
  }, []);

  // Renderizacion de vista
  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Buscar Por Nombre"
        className="form-control"
      />
     <br></br>
      <Sort  items={users} orderBy="name" updateItems={updateUsers} />

      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text white">
            <th>Nombre</th>
            <th>Nombre de Usuario</th>
            <th>Correo</th>
          </tr>
        </thead>

        <tbody>
          {results
            .filter((user) => user.name)
            .map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiApi;
