// Lego version 2.0.0-beta.3
import { h, Component } from './lego.min.js'



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
export default class Lego extends Component {
  constructed() {
    if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
    if(typeof constructed === 'function') constructed.bind(this)(this.__state)
  }
  get vdom() { return __template }
  get vstyle() { return __style }
}
// -- End Lego Core


