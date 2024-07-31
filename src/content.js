import "./styles/global.scss";
import LinkStore from "./store/LinkStore.js";

// Skeleton for sending click events
document.addEventListener("click", function (event) {
  let target = event.target;
  while (target && target.tagName !== "A") {
    target = target.parentElement;
  }
  if (target) {
    let href = target.href;
    const linkStore = new LinkStore();
    const linkData = linkStore.getLinkDataForTitle(document?.title);
    if (Array.isArray(linkData)) {
      linkStore.saveDataToSessionStorage(document?.title, [...linkData, href]);
    } else linkStore.saveDataToSessionStorage(document?.title, [href]);

    chrome.runtime.sendMessage({ pageTitle: document?.title, href: href });
  }
});
