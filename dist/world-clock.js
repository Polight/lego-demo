
// Lego version 1.10.1
import { h, Component } from 'https://cdn.jsdelivr.net/npm/@polight/lego@1.10.1/dist/lego.min.js'

class Lego extends Component {
  useShadowDOM = true

  get vdom() {
    return ({ state }) => [
  h("p", {}, [
    ((state.country) ? h("img", {"alt": state.country, "src": `https://flagpedia.net/data/flags/w20/${state.country}.png`}, "") : ''),
    ((!state.country) ? h("span", {}, `In your country: `) : ''),
`
    ${ state.time.toLocaleTimeString(state.country) }
  `
])]
  }
  
}



export default class extends Lego {
    state = { time: new Date(), country: undefined }

    connected() {
      setInterval(() => {
        this.render({ time: new Date() })
      }, 1000)
    }
  }
