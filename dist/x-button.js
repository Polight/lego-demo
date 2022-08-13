
// Lego version 1.7.1
import { h, Component } from 'https://cdn.jsdelivr.net/gh/Polight/lego@master/dist/lego.min.js.gz'

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
