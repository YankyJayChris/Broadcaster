import Login from "./views/pages/Login.js";
// import components
import Header from "./views/components/Header.js";



import Utils from './services/Utils.js'

const routes = {
  "/": Login,
};
// The router 
const router = async () => {

  // Get the parsed URl from the addressbar
  let request = Utils.getURL();
  console.log(request);
  // App contener
  const appContent = document.getElementById("app");
  appContent.innerHTML = "";
  // getting conteners in the html
  const header = document.getElementById("app_header");
  const footer = document.getElementById("app_footer");

  // Parse the URL and if it has an id part, change it with the string ":id"
  let parsedURL = `${request.resource ? "/" + request.resource : "/"}${
    request.id ? "/:id" : ""
  }${request.verb ? "/" + request.verb : ""}`;

  if (
    parsedURL == "/" ||
    parsedURL == "" ||
    parsedURL == "/register" ||
    parsedURL == "/forget"
  ) {
    header.classList.add("hide");
    footer.classList.add("hide");
    header.innerHTML = "";
  } else {
    // Render the Header of the page
    header.innerHTML = await Header.render();
    await Header.events();
  }

  // checking if route is supported and add to the dom the correct component
  let page = routes[parsedURL] ? routes[parsedURL] : Error404;
  console.log(page);
  appContent.innerHTML = await page.render();
  await page.events();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);