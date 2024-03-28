import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    
    console.log(action)
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