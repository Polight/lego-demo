// Lego version 2.0.0-beta.3
import { h, Component } from './lego.min.js'



  const state = { showText: false }

  function toggle() {
    this.render({ showText: !this.state.showText })
  }


const __template = function({ state }) {
  return [  
    h("button", {"onclick": (typeof toggle === 'function' ? toggle.bind(this) : this.toggle).bind(this)}, [
      ((state.showText) ? h("span", {}, `Now you see me 👻`) : ''),
      ((!state.showText) ? h("span", {}, `Click me… 🎃`) : '')
    ])
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
      button {
        cursor: pointer;
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


