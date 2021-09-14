import { MessageTypes } from "./types";

// This file is ran as a background script
console.log("Hello from background script!");

chrome.runtime.onMessage.addListener((message: MessageTypes) => {
  console.log(message);
  switch (message.type) {
    case "SetPrevPage":
      chrome.storage.local.set({ prevURL: message.url });
      break;
    case "SetEncrpytedPassword":
      chrome.storage.local.set({
        encryptedPassword: message.encryptedPassword,
      });
      break;
    default:
      break;
  }
});
