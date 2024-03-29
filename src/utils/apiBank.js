export const BASE_URL = "https://lookup.binlist.net";
const headers = {
            'Content-Type': 'application/json'
        }
const checkResult = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const informationRequest = (cardNumb) => {
  return fetch(`${BASE_URL}/${cardNumb}`, {
    method: "GET",
    headers,
  }).then(checkResult);
};

export const showError = (err) => {
  console.groupCollapsed('%c Auth error', 'color: red')
  console.log(err)
  console.groupEnd()
}

