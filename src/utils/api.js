import axios from 'axios';

export const obtenerInventario = async (successCallback, errorCallback) => {
  const options = { 
      method: 'GET', 
      url: 'http://localhost:5000/inventario/' };
  await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback)  => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/inventario/',
        headers: { 'Content-Type': 'application/json' },
        data,
      };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);

}

export const editarInventario = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `http://localhost:5000/inventario/${id}/`,
        headers: { 'Content-Type': 'application/json' },
        data,
      };
    await axios
      .request(options)
      .then(successCallback)
      .catch(errorCallback);
  };

  export const eliminarInventario = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `http://localhost:5000/inventario/${id}/`,
        headers: { 'Content-Type': 'application/json' },
      };
    await axios
      .request(options)
      .then(successCallback)
      .catch(errorCallback);
  };