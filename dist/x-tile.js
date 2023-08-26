 // Lego version 2.0.0-beta.3
  import { h, Component } from './lego.min.js'
  

  
  const state = { red: 0, green: 0, blue: 0 }
  const duration = 400

  const methods = {
    colorize() {
      this.render({
        red: (this.state.red + 33) % 255,
        green: (this.state.green + 55) % 255,
        blue: (this.state.blue + 77) % 255
      })
    },

    reset() {
      clearInterval(this.state.loopId)
      this.render(state)
    },
  }


  const __template = function({ state }) {
    return [  
    h("div", {"onmouseover": this.colorize.bind(this)}, "")
  ]
  }

  const __style = function({ state }) {
    return h('style', {}, `
      
      
      div {
        width: 20px;
        height: 20px;
        display: inline-block;
        background-color: rgba(${state.red}, ${state.green}, ${state.blue});
        transition: background-color ${ duration }ms linear;
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

  
