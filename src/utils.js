/*
export const getQueryString = (key) => {
  const search = window.location.search;
  const urlParams = new URLSearchParams(search);
  const queryBrowserPopupKey = urlParams.get(key);
  return queryBrowserPopupKey;
};

export const updateQueryStringParameter = ({ uri, key, value }) => {
  const reg = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
  const separator = uri.includes('?') ? '&' : '?';
  if (uri.match(reg)) {
    return uri.replace(reg, `$1${key}=${value}$2`);
  }
  return `${uri + separator + key}=${value}`;
};
*/

export const noop = () => {};

export const delay = (func, time = 500) => setTimeout(func, time);

export const addEvent = (name, func) => {
  window.removeEventListener(name, func);
  window.addEventListener(name, func);
};

export const dispatchEvent = (name) => window.dispatchEvent(name);
