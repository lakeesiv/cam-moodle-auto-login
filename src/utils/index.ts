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

export const clickRavenAuthLogin = (password: string) => {
  try {
    const errorMessageElement = document.getElementsByClassName("error")[0] as
      | HTMLElement
      | undefined;

    if (!errorMessageElement) {
      injectPassword(password);
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
  return url.includes("raven") && url.includes("vle")
    ? "raven"
    : url === "https://www.vle.cam.ac.uk/login/index.php"
    ? "moodle"
    : null;
};

const injectPassword = (password: string) => {
  try {
    document.getElementById("pwd")?.setAttribute("value", password);
  } catch (error) {
    console.log("error in injecting password", error);
  }
};
