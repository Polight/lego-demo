// Lego version 2.0.0-beta.3
import { h, Component } from './lego.min.js'



  const rows = Array(8).fill()
  const cols = Array(24).fill()

  function reset() {
    [...this.document.querySelectorAll('x-tile')].forEach(tile =>tile.reset())
  }


const __template = function({ state }) {
  return [  
    ((rows).map((row, i) => (h("div", {}, [
      ((cols).map((col, j) => (h("x-tile", {"delay": i * 10 + j}, ""))))
    ])))),
    h("button", {"onclick": (typeof reset === 'function' ? reset.bind(this) : this.reset).bind(this)}, `Reset`)
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
      :host > div {
        height: 20px;
      }
    
  `)
}

// -- Lego Core
export default class Lego extends Component {
  init() {
    if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
    if(typeof setup === 'function') setup.bind(this)()
  }
  connectedCallback() {
    if(typeof connected === 'function') connected.bind(this)()
    super.connectedCallback()
  }
  get vdom() { return __template }
  get vstyle() { return __style }
}
// -- End Lego Core


