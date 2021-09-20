import { Get, loginDetails, MessageTypes } from "./types";
import {
  clickLoginByRaven,
  decryptEncryptedLoginDetails,
  detectPage,
  RavenAuthLogin,
} from "./utils/index";

setTimeout(() => {
  const page = detectPage(window.location.toString());
  switch (page) {
    case "moodle":
      clickLoginByRaven();
      break;
    case "raven":
      chrome.runtime.sendMessage({ type: "GetEncrpytedLoginDetails" } as Get);
      break;
    default:
      break;
  }
  chrome.runtime.onMessage.addListener((message: MessageTypes) => {
    console.log(message);
    switch (message.type) {
      case "ReturnEncryptedLoginDetails":
        const loginDetails: loginDetails = decryptEncryptedLoginDetails(
          message.encryptedLoginDetails
        );
        if (page === "raven") RavenAuthLogin(loginDetails);

        break;
      default:
        break;
    }
  });
}, 200);
