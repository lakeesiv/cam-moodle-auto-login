// This file is injected as a content script
setTimeout(() => {
  const loginByRavenButton: HTMLElement = document.getElementsByClassName(
    "btn btn-secondary btn-lg btn-block mt-3"
  )[0] as HTMLElement;
  loginByRavenButton.click();

  const ravenLogInButton: HTMLElement = document.getElementsByClassName(
    "campl-btn"
  )[0] as HTMLElement;
  ravenLogInButton.click();
}, 500);
