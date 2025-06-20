
// Lego version 1.10.1
import { h, Component } from 'https://cdn.jsdelivr.net/npm/@polight/lego@1.10.1/dist/lego.min.js'

class Lego extends Component {
  useShadowDOM = true

  get vdom() {
    return ({ state }) => [
  h("button", {"onclick": this.toggle.bind(this)}, [
    ((state.showText) ? h("span", {}, `Now you see me 👻`) : ''),
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
    state = { showText: false }

    toggle() {
      this.render({ showText: !this.state.showText })
    }
  }
