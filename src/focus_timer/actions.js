import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import { toggleControlsPlayAndStop } from "./events.js";


export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  toggleControlsPlayAndStop()
  // el.btnControls[0].classList.toggle('active')
  // el.btnControls[1].classList.toggle('active')
  timer.countDown()
}

// export function plusFive() {
//   minutes = el.minutes.textContent
//   seconds = el.seconds.textContent

//   minutes + 5
// }
// export function minusfive() {
//   minutes = el.minutes.textContent
//   seconds = el.seconds.textContent

//   minutes - 5
// }

