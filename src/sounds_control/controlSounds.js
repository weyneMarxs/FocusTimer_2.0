import * as toggleContol from './toggleControlSounds.js'

toggleContol.btnSounds[0].addEventListener('click', () => {
  toggleContol.toggleForest()
})
toggleContol.btnSounds[1].addEventListener('click', () => {
  toggleContol.toggleRain()
})
toggleContol.btnSounds[2].addEventListener('click', () => {
  toggleContol.toggleCoffeShop()
})
toggleContol.btnSounds[3].addEventListener('click', () => {
  toggleContol.toggleFirerSide()
})
