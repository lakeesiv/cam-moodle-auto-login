import { secret_key } from "../secret";
import {
  encryptedLoginDetails,
  loginDetails,
  SetEncrpytedLoginDetails,
} from "../types";
import { cipher, decipher } from "./crypto";

const secret = secret_key;
const Cipher = cipher(secret);
const Decipher = decipher(secret);

/**
 * @description Selects login using Raven button on the moodle page
 */
export const clickLoginByRaven = (page: "moodle" | "medschl") => {
  try {
    if(page === "moodle") {
      for (const button of Array.from(document.getElementsByClassName(
          "btn btn-secondary"
      )) as HTMLElement[]) {
        const buttonSrc = button.querySelector("img")?.src
        if (buttonSrc && buttonSrc.includes("idp")) {
          button.click()
          return
        }
      }
    }
    else{
      (document.getElementsByClassName(
          "raven-button"
      )[0] as HTMLElement).click()
    }

  } catch (error) {
    console.log("error in moodle page", error);
  }
};

export const ravenLogin = (loginDetails: loginDetails) => {
  try {
    // check for error message, if present, do not proceed, prevent infinite loop
    const errorMessageElement = document.getElementsByClassName("error")[0] as
      | HTMLElement
      | undefined;

    if (!errorMessageElement) {
      if (loginDetails.usePasswordManagerAutofill) {
        console.log("using password manager autofill");
      }

      const ravenLogInButton = document.getElementsByClassName(
        "campl-btn"
      )[0] as HTMLButtonElement;

      if (!loginDetails?.usePasswordManagerAutofill) {
        // if not using password manager autofill, then inject login details
        injectLoginDetails(loginDetails);
        ravenLogInButton.click();
      } else {
        // if using password manager autofill, then wait for password manager to fill in the password (1s)

        setTimeout(() => {
          const pwd = (document.getElementById("pwd") as HTMLInputElement)
            .value; // check if password is filled in
          if (pwd) {
            ravenLogInButton.click();
          }
        }, 1000);
      }
    } else {
      console.log(errorMessageElement.innerText);
    }
  } catch (error) {
    console.log("error in raven page", error);
  }
};

/**
 *
 * @description Detects which page the user is on
 * @param url url of the page
 * @returns Either "raven" or "moodle" or null
 */
export const detectPage = (url: string): "raven" | "moodle" | "medschl" | null => {
  return url.includes("raven.cam.ac.uk/auth/authenticate.html") ? "raven"
      : url === "https://www.vle.cam.ac.uk/login/index.php" ? "moodle"
          : url === "https://vle.medschl.cam.ac.uk/login/index.php" ? "medschl"
              : null;
};

/**
 * @description Injects password into the password field of the login page
 * @param password password
 */
export const injectPassword = (password: string) => {
  try {
    document.getElementById("pwd")?.setAttribute("value", password);
  } catch (error) {
    console.log("error in injecting password", error);
  }
};

/**
 * @description Injects username into the username field of the login page
 * @param username username
 */
export const injectUsername = (username: string) => {
  try {
    document.getElementById("userid")?.setAttribute("value", username);
  } catch (error) {
    console.log("error in injecting username", error);
  }
};

/**
 *
 * @description Injects username and password into the login page
 * @param username username
 * @param password password
 */
export const injectLoginDetails = ({ username, password }: loginDetails) => {
  injectUsername(username);
  injectPassword(password);
};

/**
 *
 * @description Takes login details, ciphers them and sends it to background script to be  stored
 * @param username username
 * @param password password
 * @returns  void
 */
export const sendEncryptedLoginDetails = ({
  username,
  password,
}: loginDetails) => {
  const encryptedPassword = Cipher(password) as string;

  const SetEncrpytedLoginDetailsObject: SetEncrpytedLoginDetails = {
    type: "SetEncrpytedLoginDetails",
    encryptedLoginDetails: { username, encryptedPassword },
  };

  chrome.runtime.sendMessage(SetEncrpytedLoginDetailsObject);
};

/**
 *
 * @param username username
 * @param encryptedPassword ciphered password
 * @param usePasswordManagerAutofill boolean to indicate whether to use password manager autofill
 * @returns  decrypted login details `{
  username: string;
  password: string;
  usePasswordManagerAutofill?: boolean;
}`
 */
export const decryptEncryptedLoginDetails = ({
  username,
  encryptedPassword,
  usePasswordManagerAutofill,
}: encryptedLoginDetails): loginDetails => {
  if (!encryptedPassword)
    return { username, password: "", usePasswordManagerAutofill };

  const password = Decipher(encryptedPassword);
  return { username, password, usePasswordManagerAutofill };
};

/**
 *
 * @param message Sends message from background to content script
 */
export const sendMessageFromBackground = (message: any) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id as number, message);
  });
};
