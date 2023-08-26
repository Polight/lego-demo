 // Lego version 2.0.0-beta.3
  import { h, Component } from './lego.min.js'
  

  
  const rows = Array(8).fill()
  const cols = Array(24).fill()

  const methods = {
    reset() {
      [...this.document.querySelectorAll('x-tile')].forEach(tile =>tile.reset())
    }
  }


  const __template = function({ state }) {
    return [  
    ((rows).map((row, i) => (h("div", {}, [
      ((cols).map((col, j) => (h("x-tile", {"delay": i * 10 + j}, ""))))
    ])))),
    h("button", {"onclick": this.reset.bind(this)}, `Reset`)
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

  
