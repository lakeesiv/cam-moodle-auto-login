import {
  EncryptedPasswordObject,
  MessageTypes,
  ReturnEncryptedPassword,
} from "./types";

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
      } as EncryptedPasswordObject);
      break;
    case "GetEncryptedPassword":
      chrome.storage.local.get(["encryptedPassword"], (res) => {
        const message: ReturnEncryptedPassword = {
          type: "ReturnEncryptedPassword",
          encryptedPassword: (res as EncryptedPasswordObject).encryptedPassword,
        };
        chrome.runtime.sendMessage(message);
      });
      break;
    default:
      break;
  }
});
