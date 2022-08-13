
// Lego version undefined
import { h, Component } from '/lego.min.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("button", {"onclick": this.toggleText.bind(this)}, [
    ((state.showText) ? h("span", {}, `Wow, you're a clicker! 👾👾👾`) : ''),
    ((!state.showText) ? h("span", {}, `Click me… 🎃`) : '')
])]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    
    button {
    cursor: pointer;
  }
  `)}
}



export default class extends Lego {
    init() {
      this.state = { showText: false }
    }

    toggleText() {
      this.render({ showText: !this.state.showText })
    }
  }
