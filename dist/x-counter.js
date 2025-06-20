
// Lego version 1.10.1
import { h, Component } from 'https://cdn.jsdelivr.net/npm/@polight/lego@1.10.1/dist/lego.min.js'

class Lego extends Component {
  useShadowDOM = true

  get vdom() {
    return ({ state }) => [
  h("button", {"class": `primary`, "onclick": this.decrement.bind(this)}, `-`),
  h("span", {}, `${ state.counter }`),
  h("button", {"onclick": this.increment.bind(this)}, `+`),
  h("button", {"onclick": this.reset.bind(this), "class": `reset`}, `reset`),
  h("progress", {"value": state.counter, "max": `10`, "title": `Counter is at ${state.counter}`}, "")]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    
    @import url('index.css');

  progress {
    max-width: 300px;
  }
  `)}
}



export default class extends Lego {
    state = { counter: 0 }

    increment() {
      this.render({ counter: this.state.counter + 1 })
    }

    decrement() {
      this.render({ counter: this.state.counter - 1 })
    }

    reset() {
      this.render({ counter: 0 })
    }
  }
