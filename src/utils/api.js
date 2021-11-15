import axios from 'axios';


const getToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
  };
// CRUD inventarios

export const obtenerInventario = async (successCallback, errorCallback) => {
  const options = { 
      method: 'GET', 
      url: 'http://localhost:5000/inventario/',
      headers: {Authorization: getToken()} }
  await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
};

export const crearProducto = async (data, successCallback, errorCallback)  => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/inventario/',
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
        url: `http://localhost:5000/inventario/${id}/`,
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
        url: `http://localhost:5000/inventario/${id}/`,
        headers: { 'Content-Type': 'application/json' ,Authorization: getToken()},
        };
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

// CRUD Usuarios

export const obtenerUsuarios = async (successCallback, errorCallback) => {
    const options = { 
        method: 'GET', 
        url: 'http://localhost:5000/usuarios/',
        headers: {Authorization: getToken()} }
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:5000/usuarios/self',
      headers: {
        Authorization: getToken(), // 3. enviarle el token a backend
      },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  

export const crearUsuario = async (data, successCallback, errorCallback)  => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/usuarios/',
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
        url: `http://localhost:5000/usuarios/${id}/`,
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
        url: `http://localhost:5000/usuarios/${id}/`,
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
        url: 'http://localhost:5000/ventas/',
        headers: {Authorization: getToken()} }
    await axios
        .request(options)
        .then(successCallback)
        .catch(errorCallback);
};

export const crearVentas = async (data, successCallback, errorCallback)  => {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/ventas/',
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
        url: `http://localhost:5000/ventas/${id}/`,
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
        url: `http://localhost:5000/ventas/${id}/`,
        headers: { 'Content-Type': 'application/json',Authorization: getToken() },
    };
    await axios
    .request(options)
    .then(successCallback)
    .catch(errorCallback);
};