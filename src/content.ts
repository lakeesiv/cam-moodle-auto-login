import { SetPrevPage } from "./types";
import {
  clickLoginByRaven,
  clickRavenAuthLogin,
  detectPage,
} from "./utils/index";

setTimeout(() => {
  const page = detectPage(window.location.toString());
  const prevURLObject: SetPrevPage = {
    type: "SetPrevPage",
    url: window.location.toString(),
  };
  if (!page) {
    chrome.runtime.sendMessage(prevURLObject);
  }

  switch (page) {
    case "moodle":
      clickLoginByRaven();
      break;
    case "raven":
      clickRavenAuthLogin("meh");
      break;
    default:
      break;
  }
}, 200);
