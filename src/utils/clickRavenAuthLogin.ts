export const clickRavenAuthLogin = () => {
  try {
    const ravenLogInButton: HTMLElement = document.getElementsByClassName(
      "campl-btn"
    )[0] as HTMLElement;
    ravenLogInButton.click();
  } catch (error) {
    console.log("error in raven page", error);
  }
};
