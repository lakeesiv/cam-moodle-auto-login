import { MessageTypes } from "./types";

// This file is ran as a background script
console.log("Hello from background script!");

chrome.runtime.onMessage.addListener((message: MessageTypes) => {
  //  chrome.cookies.getAll({}, (cks) => {
  //   console.log("cookies", cks);
  // });
  console.log(message);
  switch (message.type) {
    case "SetPrevPage":
      chrome.storage.local.set({ prevURL: message.url });
      break;
    default:
      break;
  }
});
