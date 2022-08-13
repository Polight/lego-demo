
// Lego version 1.7.1
import { h, Component } from 'https://cdn.jsdelivr.net/gh/Polight/lego@master/dist/lego.min.js.gz'

class Lego extends Component {
  get vdom() {
    return ({ state }) => [
  h("p", {}, `Current time: ${state.time || '...'}`)]
  }
  
}



export default class extends Lego {
    init() {
      this.state = {
        time: null,
      }

      setInterval(() => {
        this.dispatchEvent(new CustomEvent('tick', { detail: { time: new Date() } }))
      }, 1000)

      this.addEventListener('tick', ({ detail: {time} }) => {
        this.render({ time: time.toLocaleTimeString() })
      })
    }
  }
