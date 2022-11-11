import Component from "./components/Component.js";
import Home from "./view/Home.js";
import Info from "./view/Info.js";
import Setting from "./view/Setting.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/info", view: Info },
    { path: "/setting", view: Setting },
  ];
  console.log(location.pathname);

  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((m) => m.isMatch);
  if (!match) {
    const NotFound = new Component(document.querySelector("#app"));
    NotFound.template = () => {
      return `<div>not found</div>`;
    };
  } else {
    new match.route.view(document.querySelector("#app"));
  }
};

window.addEventListener("popstate", () => {
  router();
});

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  router();
});
