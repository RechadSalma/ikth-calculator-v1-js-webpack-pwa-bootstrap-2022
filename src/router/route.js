import Home from "../pages/Home.js";
import Side from "../pages/side.js";

function route() {
    // console.log(window.location);

    switch (window.location.pathname) {
        case "/":
            console.log("iK calculator page");
            return Home();
        case "/side":
            console.log("iK side page");
            return Side();
        default:
            return `<code>iK sorry but this page does not exist</code>`;
    }
}

export default route;
