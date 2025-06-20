
// Lego version 1.10.1
import { h, Component } from 'https://cdn.jsdelivr.net/npm/@polight/lego@1.10.1/dist/lego.min.js'

class Lego extends Component {
  useShadowDOM = true

  get vdom() {
    return ({ state }) => [
  ((this.rows).map((row, i) => (h("div", {}, [
    ((this.cols).map((col, j) => (h("x-tile", {"delay": i * 10 + j}, ""))))
])))),
  h("button", {"onclick": this.reset.bind(this)}, `Reset`)]
  }
  get vstyle() {
    return ({ state }) => h('style', {}, `
    
    :host > div {
    height: 20px;
  }
  `)}
}



export default class extends Lego {
    rows = Array(8).fill()
    cols = Array(24).fill()

    reset() {
      ;[...this.document.querySelectorAll('x-tile')].forEach(tile =>
        tile.reset()
      )
    }
  }
