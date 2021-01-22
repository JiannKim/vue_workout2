// GET
const getReq = async (url, config = {}) => {
  if (config.headers) config.headers["Content-type"] = "application/json";
  const baseConfig = {
    method: "GET",
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// POST
const postReq = async (url, config = {}) => {
  if (config.headers) config.headers["Content-type"] = "application/json";
  const baseConfig = {
    method: "GET",
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// PUT
const putReq = async (url, config = {}) => {
  if (config.headers) config.headers["Content-type"] = "application/json";
  const baseConfig = {
    method: "GET",
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// PATCH
const patchReq = async (url, config = {}) => {
  if (config.headers) config.headers["Content-type"] = "application/json";
  const baseConfig = {
    method: "GET",
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

// DELETE
const deleteReq = async (url, config = {}) => {
  if (config.headers) config.headers["Content-type"] = "application/json";
  const baseConfig = {
    method: "GET",
    headers: config.headers || {},
  };
  const result = await fetch(url, baseConfig);
  return result.json();
};

//xhr
// AJAX functions
const URL =
  "https://36bl37sesg.execute-api.ap-northeast-2.amazonaws.com/recurit/helloSmartjack";

const getR = async () => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  let result = xhr.open("GET", URL);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const response = xhr.response;
      console.log("call state");
      console.log(xhr.readyState);
      if (xhr.status === 200) {
        console.log(xhr.status);
        console.log(response);
      } else {
        alert("request에 뭔가 문제가 있어요.");
      }
    }
  };
  // const res = xhr.response;
  // console.log("res", res);
  return result;
};

export { getReq, postReq, putReq, patchReq, deleteReq, getR };
