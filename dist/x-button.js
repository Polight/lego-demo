 // Lego version 2.0.0-beta.3
  import { h, Component } from './lego.min.js'
  

  
  const state = { showText: false }

  const methods = {
    toggle() {
      this.render({ showText: !this.state.showText })
    }
  }


  const __template = function({ state }) {
    return [  
    h("button", {"onclick": this.toggle.bind(this)}, [
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

  
