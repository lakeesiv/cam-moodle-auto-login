import { clickLoginByRaven } from "./utils/clickLoginByRaven";
import { clickRavenAuthLogin } from "./utils/clickRavenAuthLogin";
import { detectPage } from "./utils/detectPage";

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
