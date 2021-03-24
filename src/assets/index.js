export const BASE = process.env.REACT_APP_API_BASE || window.location.origin;
// export const BASE = window.location.origin;

export const urlScheme = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const URLValidator = (url) => urlScheme.test(url);
