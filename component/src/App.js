import Component from "./component.js";

class App extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
        <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <button id="add">추가</button>
        <button id="del">삭제</button>
    `;
  }

  setEvent() {
    this.$target.querySelector("button#add").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.$target.querySelector("button#del").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: items.splice(0, items.length - 1) });
    });
  }
}

new App(document.getElementById("App"));
