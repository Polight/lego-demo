// Lego version 2.0.0-beta.3
import { h, Component } from './lego.js'



  const state = { red: 0, green: 0, blue: 0 }
  const duration = 400

  function colorize() {
    this.render({
      red: (this.state.red + 33) % 255,
      green: (this.state.green + 55) % 255,
      blue: (this.state.blue + 77) % 255
    })
  }


const __template = function({ state }) {
  return [  
    h("div", {"onmouseover": (typeof colorize === 'function' ? colorize.bind(this) : this.colorize).bind(this)}, "")
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
      div {
        width: 20px;
        height: 20px;
        background-color: rgba(${state.red}, ${state.green}, ${state.blue});
        display: inline-block;
        transition: background-color ${ duration }ms linear;
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


