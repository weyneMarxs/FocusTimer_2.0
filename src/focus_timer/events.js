import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
import { effect_click } from "../sounds_control/sounds.js";

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

export function toggleControlsPlayAndStop() {
  if(!el.btnControls[0].classList.contains('active')){
    el.btnControls[0].classList.add('active')
    el.btnControls[1].classList.remove('active')
  } else {
    el.btnControls[0].classList.toggle('active')
    el.btnControls[1].classList.toggle('active')
  }
}

export function plusTimer () {
  el.btnControls[2].addEventListener('click', () => {
    effect_click.play()
    let minutes = Number(el.minutes.textContent)
    let plus = 5
    const limit = 60
    const gap = limit - minutes

    if(minutes >= limit ) {
      return
    }

    if(gap >= plus) {
      el.minutes.textContent = minutes += plus
    } else {
      el.minutes.textContent = minutes += gap
      el.seconds.textContent = 0
    }
  })
}
export function minusTimer () {
  el.btnControls[3].addEventListener('click', () => {
    effect_click.play()
    let minutes = Number(el.minutes.textContent)
    let minus = 5
    const limit = 0

    if(minutes <= limit) {
      return
    }
    el.minutes.textContent = minutes - minus
  })
}