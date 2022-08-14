
// Lego version 1.7.1
import { h, Component } from '/node_modules/@polight/lego/dist/lego.js'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("p", {}, `Hello ${state.name}`)]
  }
  
}



export default class extends Lego {
    init() {
      this.state = { name: 'world' }
    }
  }
