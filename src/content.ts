import {
  clickLoginByRaven,
  clickRavenAuthLogin,
  detectPage,
} from "./utils/index";

setTimeout(() => {
  const page = detectPage(window.location.toString());

  switch (page) {
    case "moodle":
      clickLoginByRaven();
      break;
    case "raven":
      clickRavenAuthLogin();
      break;
    default:
      break;
  }
}, 500);
