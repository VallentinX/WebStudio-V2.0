/** Dark / Light Mode */
// CSS File Link Variables
const HEAD = document.getElementsByTagName("head")[0];
let headLink = document.createElement("link");

// Header Dark - Mode Variables
const BUTTON_DARK_MODE = document.getElementsByClassName("dark-mode")[0];
let svgDarkModeChild = document.getElementsByClassName("dark-mode")[2];

// Mobile Dark - Mode Variables
const MOBILE_BUTTON_DARK_MODE =
  document.getElementsByClassName("mobile-dark-mode")[1];
let mobileSvgDarkModeChild =
  document.getElementsByClassName("mobile-dark-mode")[3];
let mobileDarkModeText = document.getElementsByClassName("mobile-dark-mode")[4];

let darkModeOn = function () {
  if (
    BUTTON_DARK_MODE.className === "dark-mode activate" ||
    MOBILE_BUTTON_DARK_MODE.className === "dark-mode activate"
  ) {
    HEAD.appendChild(headLink);
    headLink.rel = "stylesheet";
    headLink.type = "text/css";
    headLink.href = "./css/webstudio-dark-mode.css";

    svgDarkModeChild.setAttribute(
      "href",
      "./images/webstudio.svg#icon-light-mode"
    );
    mobileSvgDarkModeChild.setAttribute(
      "href",
      "./images/webstudio.svg#icon-light-mode"
    );

    mobileDarkModeText.innerHTML = "Light mode";

    BUTTON_DARK_MODE.className = "dark-mode";
    MOBILE_BUTTON_DARK_MODE.className = "mobile-dark-mode";
  } else {
    HEAD.removeChild(headLink);

    svgDarkModeChild.setAttribute(
      "href",
      "./images/webstudio.svg#icon-dark-mode"
    );
    mobileSvgDarkModeChild.setAttribute(
      "href",
      "./images/webstudio.svg#icon-dark-mode"
    );

    mobileDarkModeText.innerHTML = "Dark mode";

    BUTTON_DARK_MODE.className = "dark-mode activate";
    MOBILE_BUTTON_DARK_MODE.className = "mobile-dark-mode activate";
  }
};

BUTTON_DARK_MODE.onclick = darkModeOn;
MOBILE_BUTTON_DARK_MODE.onclick = darkModeOn;
