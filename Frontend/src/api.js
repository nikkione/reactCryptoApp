import { cryptoAssets } from "./data";

export function fetchCrypto() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-API-KEY": "g8xBZ6LVnwn2FtfTcZDumalRX7dD28muCJWPs4FQQYs=",
    },
  };

  return fetch("https://openapiv1.coinstats.app/coins", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((err) => {
      // It's generally a good idea to log the error, but you also want to make sure
      // the error is propagated back to the caller.
      console.error("Fetch error:", err);
      throw err; // Re-throw the error so the calling code can handle it
    });
}
export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1);
  });
}

export function fakeFetchAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 2);
  });
}
