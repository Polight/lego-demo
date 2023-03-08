// Lego version 2.0.0-beta.3
import { h, Component } from './lego.js'



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


