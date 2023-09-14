import {
  encryptedLoginDetails,
  EncryptedLoginDetailsObject,
  MessageTypes,
  ReturnEncryptedLoginDetails,
} from "./types";
import { sendMessageFromBackground } from "./utils";

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

      case "SetUsePasswordManagerAutofill":
        chrome.storage.local.get(["encryptedLoginDetails"], (res) => {
          // sendResponse(res);
          const details = {
            encryptedLoginDetails: { ...res },
          } as { encryptedLoginDetails: encryptedLoginDetails };

          console.log(details);

          details.encryptedLoginDetails.usePasswordManagerAutofill =
            message.usePasswordManagerAutofill;

          console.log(details);

          chrome.storage.local.set({
            encryptedLoginDetails: details.encryptedLoginDetails,
          } as EncryptedLoginDetailsObject);
        });

      case "GetEncryptedLoginDetails":
        chrome.storage.local.get(["encryptedLoginDetails"], (res) => {
          // sendResponse(res);
          const response = res as {
            encryptedLoginDetails: encryptedLoginDetails;
          };

          console.log("GetEncryptedLoginDetails:" + JSON.stringify(response));

          const message: ReturnEncryptedLoginDetails = {
            type: "ReturnEncryptedLoginDetails",
            encryptedLoginDetails: response.encryptedLoginDetails,
          };
          sendMessageFromBackground(message);
        });
        break;
      case "GetLoginDetailsPresent":
        chrome.storage.local.get(["encryptedLoginDetails"], (res) => {
          const present: boolean = (
            res.encryptedLoginDetails as encryptedLoginDetails
          ).encryptedPassword
            ? true
            : false;
          console.log("GetLoginDetailsPresent: " + present);
          sendResponse(present);
        });
        break;

      case "GetUsePasswordManagerAutofill":
        chrome.storage.local.get(["encryptedLoginDetails"], (res) => {
          const present: boolean = (
            res.encryptedLoginDetails as encryptedLoginDetails
          ).usePasswordManagerAutofill
            ? true
            : false;
          console.log("GetUsePasswordManagerAutofill: " + present);
          sendResponse(present);
        });
        break;

      case "RemoveData":
        chrome.storage.local.clear(() => {});
        break;
      default:
        break;
    }
    return true;
  }
);
