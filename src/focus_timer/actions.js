import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import { toggleControlsPlayAndStop } from "./events.js";
import { effect_click } from "../sounds_control/sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  toggleControlsPlayAndStop()
  let btnPlay = el.btnControls[0].classList.contains('active')
  let btnStop = el.btnControls[1].classList.contains('active')
  btnPlay ? el.btnControls[0].disabled = true : el.btnControls[0].disabled = false
  btnStop ? el.btnControls[1].disabled = true : el.btnControls[1].disabled = false
  timer.countDown()
  effect_click.play()


}

export function restart() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}