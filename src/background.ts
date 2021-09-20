import {
  encryptedLoginDetails,
  EncryptedLoginDetailsObject,
  MessageTypes,
  ReturnEncryptedLoginDetails,
} from "./types";
import { sendMessageFromBackground } from "./utils";

// This file is ran as a background script
console.log("Hello from background script!");

chrome.runtime.onMessage.addListener(
  (message: MessageTypes, _, sendResponse) => {
    console.log(message);
    switch (message.type) {
      case "SetPrevPage":
        chrome.storage.local.set({ prevURL: message.url });
        break;

      case "SetEncrpytedLoginDetails":
        chrome.storage.local.set({
          encryptedLoginDetails: message.encryptedLoginDetails,
        } as EncryptedLoginDetailsObject);
        break;

      case "GetEncrpytedLoginDetails":
        chrome.storage.local.get(["encryptedLoginDetails"], (res) => {
          // sendResponse(res);
          const message: ReturnEncryptedLoginDetails = {
            type: "ReturnEncryptedLoginDetails",
            encryptedLoginDetails: (
              res as { encryptedLoginDetails: encryptedLoginDetails }
            ).encryptedLoginDetails,
          };
          sendMessageFromBackground(message);
        });
        break;
      case "GetLoginDetailsPresent":
        chrome.storage.local.get(["encryptedLoginDetails"], (res) => {
          const present: boolean = res ? true : false;
          sendResponse(present);
        });
        break;
      default:
        break;
    }
    return true;
  }
);
