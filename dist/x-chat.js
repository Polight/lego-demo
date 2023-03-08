// Lego version 2.0.0-beta.3
import { h, Component } from './lego.min.js'


undefined

const __template = function({ state }) {
  return [  
    h("header", {},       h("p", {}, `Header`)),
    h("main", {}, [
      h("nav", {}, [
        h("p", {}, `Sidebar 1`)
      ]),
      h("article", {}, [
        h("p", {}, `Main content of the page`)
      ]),
      h("aside", {}, [
        h("p", {}, `Sidebar 2`)
      ])
    ]),
    h("footer", {}, [
      h("p", {}, `Footer`)
    ])
  ]
}

const __style = function({ state }) {
  return h('style', {}, `
    
    
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      main {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
      }
      article {
        flex-grow: 1;
      }
      nav,
      aside {
        width: 25%;
      }
    
  `)
}

// -- Lego Core
let render = async function (state) {}

export default class Lego extends Component {
  constructor() {
    super()
    try {
      this.__state = state
    } catch {}
    render = this.render.bind(this)
    try {
      constructed(this)
    } catch {}
  }
  get vdom() { return __template }
  get vstyle() { return __style }
}
// -- End Lego Core


