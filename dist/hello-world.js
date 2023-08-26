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
    init() {
      this.useShadowDOM = true
      if(typeof state === 'object') this.__state = Object.assign({}, state, this.__state)
      if(typeof methods === 'object') Object.keys(methods).forEach(methodName => this[methodName] = methods[methodName])
      if(typeof connected === 'function') this.connected = connected
      if(typeof setup === 'function') setup.bind(this)()
    }
    get vdom() { return __template }
    get vstyle() { return __style }
  }
  // -- End Lego Core

  
