import axios from 'axios';


const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
  };
// CRUD inventarios

export const obtenerInventario = async (successCallback, errorCallback) => {
  const options = { 
      method: 'GET', 
      url: 'https://mysterious-sierra-55098.herokuapp.com/inventario/',
      headers: {Authorization: getToken()} }
  await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback)  => {
    const options = {
        method: 'POST',
        url: 'https://mysterious-sierra-55098.herokuapp.com/inventario/',
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
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
        url: `https://mysterious-sierra-55098.herokuapp.com/inventario/${id}/`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
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
        url: `https://mysterious-sierra-55098.herokuapp.com/inventario/${id}/`,
        headers: { 'Content-Type': 'application/json' ,Authorization: getToken()},
        };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

// CRUD Usuarios


export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: 'https://mysterious-sierra-55098.herokuapp.com/usuarios/self',
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };

  
export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = { 
        method: 'GET', 
        url: 'https://mysterious-sierra-55098.herokuapp.com/usuarios/',
        headers: {Authorization: getToken()} }
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

  

export const crearUsuario = async (data, successCallback, errorCallback)  => {
    const options = {
        method: 'POST',
        url: 'https://mysterious-sierra-55098.herokuapp.com/usuarios/',
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data,
    };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);

}

export const editarUsuario = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `https://mysterious-sierra-55098.herokuapp.com/usuarios/${id}/`,
        headers: { 'Content-Type': 'application/json' ,Authorization: getToken()},
        data,
    };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
    };

export const eliminarUsuario = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `https://mysterious-sierra-55098.herokuapp.com/usuarios/${id}/`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
};

// CRUD ventas

export const obtenerVenta = async (successCallback, errorCallback) => {
    const options = { 
        method: 'GET', 
        url: 'https://mysterious-sierra-55098.herokuapp.com/ventas/',
        headers: {Authorization: getToken()} }
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

export const crearVentas = async (data, successCallback, errorCallback)  => {
    const options = {
        method: 'POST',
        url: 'https://mysterious-sierra-55098.herokuapp.com/ventas/',
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data,
    };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);

}

export const editarVentas = async (id, data, successCallback, errorCallback) => {
    const options = {
        method: 'PATCH',
        url: `https://mysterious-sierra-55098.herokuapp.com/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
        data,
    };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
};

export const eliminarVentas = async (id, successCallback, errorCallback) => {
    const options = {
        method: 'DELETE',
        url: `https://mysterious-sierra-55098.herokuapp.com/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
};