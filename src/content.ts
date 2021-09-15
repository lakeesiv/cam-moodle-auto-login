import { Get, MessageTypes, SetPrevPage } from "./types";
import {
  clickLoginByRaven,
  clickRavenAuthLogin,
  decryptEncryptedPassword,
  detectPage,
} from "./utils/index";

setTimeout(() => {
  const page = detectPage(window.location.toString());

  switch (page) {
    case "moodle":
      clickLoginByRaven();
      break;
    case "raven":
      chrome.runtime.sendMessage({ type: "GetEncryptedPassword" } as Get);
      break;
    default:
      break;
  }
  chrome.runtime.onMessage.addListener((message: MessageTypes) => {
    console.log(message);
    switch (message.type) {
      case "ReturnEncryptedPassword":
        console.log(decryptEncryptedPassword(message.encryptedPassword));
        const password = decryptEncryptedPassword(message.encryptedPassword);
        if (page === "raven") clickRavenAuthLogin(password);

      default:
        break;
    }
  });
}, 200);
