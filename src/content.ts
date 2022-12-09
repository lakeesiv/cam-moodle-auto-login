import { Get, loginDetails, MessageTypes } from "./types";
import {
  clickLoginByRaven,
  decryptEncryptedLoginDetails,
  detectPage,
  RavenAuthLogin as Login,
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
    switch (message.type) {
      case "ReturnEncryptedLoginDetails":
        console.log(message.encryptedLoginDetails);
        const loginDetails: loginDetails = {
          ...decryptEncryptedLoginDetails(message.encryptedLoginDetails),

          usePasswordManagerAutofill:
            message.encryptedLoginDetails.usePasswordManagerAutofill,
        };

        // console.log(JSON.stringify(loginDetails));

        if (page === "raven") Login(loginDetails);

        break;
      default:
        break;
    }
  });
}, 200);
