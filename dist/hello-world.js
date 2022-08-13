
// Lego version 1.7.1
import { h, Component } from 'https://cdn.jsdelivr.net/gh/Polight/lego@master/dist/lego.min.js.gz'

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
