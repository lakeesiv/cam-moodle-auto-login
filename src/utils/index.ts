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

export const clickLoginByRaven = () => {
  try {
    const loginByRavenButton: HTMLElement = document.getElementsByClassName(
      "btn btn-secondary btn-lg btn-block mt-3"
    )[0] as HTMLElement;
    loginByRavenButton.click();
  } catch (error) {
    console.log("error in moodle page", error);
  }
};

export const RavenAuthLogin = (loginDetails: loginDetails) => {
  try {
    const errorMessageElement = document.getElementsByClassName("error")[0] as
      | HTMLElement
      | undefined;

    if (!errorMessageElement) {
      if (!loginDetails?.usePasswordManagerAutofill) {
        injectLoginDetails(loginDetails);
      }
      const ravenLogInButton: HTMLElement = document.getElementsByClassName(
        "campl-btn"
      )[0] as HTMLElement;
      ravenLogInButton.click();
    } else {
      console.log(errorMessageElement.innerText);
    }
  } catch (error) {
    console.log("error in raven page", error);
  }
};

export const detectPage = (url: string): "raven" | "moodle" | null => {
  return url.includes("https://raven.cam.ac.uk/auth/authenticate.html")
    ? "raven"
    : url === "https://www.vle.cam.ac.uk/login/index.php"
    ? "moodle"
    : null;
};

export const injectPassword = (password: string) => {
  try {
    document.getElementById("pwd")?.setAttribute("value", password);
  } catch (error) {
    console.log("error in injecting password", error);
  }
};

export const injectUsername = (username: string) => {
  try {
    document.getElementById("userid")?.setAttribute("value", username);
  } catch (error) {
    console.log("error in injecting username", error);
  }
};

export const injectLoginDetails = ({ username, password }: loginDetails) => {
  injectUsername(username);
  injectPassword(password);
};

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

export const decryptEncryptedLoginDetails = ({
  username,
  encryptedPassword,
}: encryptedLoginDetails): loginDetails => {
  const password = Decipher(encryptedPassword);
  return { username, password };
};

export const sendMessageFromBackground = (message: any) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id as number, message);
  });
};
