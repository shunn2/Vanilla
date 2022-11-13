import FetchAPI from "./fetch.js";
import Component from "./Component.js";

class App extends Component {
  setup() {}
  template() {
    let fetchResponse = [];
    FetchAPI("GET", (result) => {
      console.log("result", result);
    });
    return `
            <ul>
                ${fetchResponse.map(
                  (v, i) => `
                  <li key=${v.id}>
                    <p>${v.title}</p>
                    <p>${v.body}</p>
                  </li>`
                )}
            </ul>
        `;
  }
}

new App(document.querySelector("#app"));
