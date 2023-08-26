 // Lego version 2.0.0-beta.3
  import { h, Component } from './lego.min.js'
  

  
  const state = { counter: 0 }

  const methods = {
    increment() {
      this.render({ counter: this.state.counter + 1 })
    },
    decrement() {
      this.render({ counter: this.state.counter - 1 })
    },
    reset() {
      this.render({ counter: 0 })
    },
  }


  const __template = function({ state }) {
    return [  
    h("button", {"class": `primary`, "onclick": this.decrement.bind(this)}, `-`),
    h("span", {}, `${ state.counter }`),
    h("button", {"onclick": this.increment.bind(this)}, `+`),
    h("button", {"onclick": this.reset.bind(this), "class": `reset`}, `reset`),
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

  
