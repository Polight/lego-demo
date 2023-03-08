// Lego version 2.0.0-beta.3
import { h, Component } from './lego.js'



  const state = { counter: 0 }

  function increment() {
    this.render({ counter: this.state.counter + 1 })
  }
  function decrement() {
    this.render({ counter: this.state.counter - 1 })
  }
  function reset() {
    this.render({ counter: 0 })
  }


const __template = function({ state }) {
  return [  
    h("button", {"class": `primary`, "onclick": (typeof decrement === 'function' ? decrement.bind(this) : this.decrement).bind(this)}, `-`),
    h("span", {}, `${ state.counter }`),
    h("button", {"onclick": (typeof increment === 'function' ? increment.bind(this) : this.increment).bind(this)}, `+`),
    h("button", {"onclick": (typeof reset === 'function' ? reset.bind(this) : this.reset).bind(this), "class": `reset`}, `reset`),
    h("progress", {"value": state.counter, "max": `10`, "title": `Counter is at ${state.counter}`}, "")
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
      @import url('index.css');
      
      progress {
        max-width: 300px;
      }
    
  `)
}

// -- Lego Core
let render = async function (state) {}

export default class Lego extends Component {
  constructed() {
    render = this.render.bind(this)
    if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
    if(typeof constructed === 'function') constructed.bind(this)(this.__state)
  }
  
  get vdom() { return __template }
  get vstyle() { return __style }
}
// -- End Lego Core


