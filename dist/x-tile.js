
// Lego version 1.10.1
import { h, Component } from 'https://cdn.jsdelivr.net/npm/@polight/lego@1.10.1/dist/lego.min.js'

class Lego extends Component {
  useShadowDOM = true

  get vdom() {
    return ({ state }) => [
  h("div", {"onmouseover": this.colorize.bind(this)}, "")]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    
    div {
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: rgba(${state.red}, ${state.green}, ${state.blue});
    transition: background-color ${ this.duration }ms linear;
  }
  `)}
}



export default class extends Lego {
    state = { red: 0, green: 0, blue: 0 }
    duration = 400

    colorize() {
      this.render({
        red: (this.state.red + 33) % 255,
        green: (this.state.green + 55) % 255,
        blue: (this.state.blue + 77) % 255
      })
    }

    reset() {
      clearInterval(this.state.loopId)
      this.render(state)
    }
  }
