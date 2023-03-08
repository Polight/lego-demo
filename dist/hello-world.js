// Lego version 2.0.0-beta.3
import { h, Component } from './lego.js'



  const state = { icon: '🌎', planet: 'world' }


const __template = function({ state }) {
  return [  
    h("p", {}, `${ state.icon } Hello ${ state.planet }`)
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
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


