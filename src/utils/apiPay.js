export const BASE_URL = "http://localhost:2050/";
const headers = {
            'Content-Type': 'application/json'
        },
const checkResult = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const postData = (data) => {
  return fetch(`${BASE_URL}/api/${id}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  }).then(checkResult);
};

export const showError = (err) => {
  console.groupCollapsed('%c Auth error', 'color: red')
  console.log(err)
  console.groupEnd()
}