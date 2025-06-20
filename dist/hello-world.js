
// Lego version 1.10.1
import { h, Component } from 'https://cdn.jsdelivr.net/npm/@polight/lego@1.10.1/dist/lego.min.js'

class Lego extends Component {
  useShadowDOM = true

  get vdom() {
    return ({ state }) => [
  h("p", {}, `${ state.icon } Hello ${ state.planet }`)]
  }
  
}



export default class extends Lego {
    state = { icon: '🌎', planet: 'world' }
  }
