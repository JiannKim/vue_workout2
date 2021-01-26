// GET
const getReq = async (url, config = {}) => {
  if (config.headers) config.headers['Content-type'] = 'application/json';
  const baseConfig = {
    method: 'GET',
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// POST
const postReq = async (url, config = {}) => {
  if (config.headers) config.headers['Content-type'] = 'application/json';
  const baseConfig = {
    method: 'GET',
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// PUT
const putReq = async (url, config = {}) => {
  if (config.headers) config.headers['Content-type'] = 'application/json';
  const baseConfig = {
    method: 'GET',
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// PATCH
const patchReq = async (url, config = {}) => {
  if (config.headers) config.headers['Content-type'] = 'application/json';
  const baseConfig = {
    method: 'GET',
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// DELETE
const deleteReq = async (url, config = {}) => {
  if (config.headers) config.headers['Content-type'] = 'application/json';
  const baseConfig = {
    method: 'GET',
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

export { getReq, postReq, putReq, patchReq, deleteReq };
