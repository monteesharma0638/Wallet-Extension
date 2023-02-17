/* global chrome */

const chromeStroage = {
  setItem: async (key, value) => await chrome.storage.local.set(key, value),
  getItems: async (keys) => await chrome.stroage.local.get(keys)
};

const developmentApi = {
  setItem: async (key, value) =>  window.localStorage.setItem(key, value),
  getItems: async (keys) => keys.map(value => ({[value]: window.localStorage.getItem(value)})),
};

export const storageApi =
  process.env.REACT_APP_MODE === "development" ? developmentApi : chromeStroage;
