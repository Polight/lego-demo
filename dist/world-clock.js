// Lego version 2.0.0-beta.3
import { h, Component } from './lego.js'



  const state = { time: new Date(), country: undefined }

  function constructed() {
    setInterval(() => {
      this.render({ time: new Date() })
    }, 1000)
  }


const __template = function({ state }) {
  return [  
    h("p", {}, [
      ((state.country) ? h("img", {"alt": state.country, "src": `https://flagpedia.net/data/flags/w20/${state.country}.png`}, "") : ''),
      ((!state.country) ? h("span", {}, `In your country: `) : ''),
`
    ${ state.time.toLocaleTimeString(state.country) }
  `
    ])
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


