import * as sounds from './sounds.js'
export const btnSounds = document.querySelectorAll('#sounds button')

export function toggleForest () {
  const play = btnSounds[0].classList.contains('active')
  if(play) {
    btnSounds.forEach( index => index.classList.remove('active'))
    sounds.bg_forest.pause()
    return
  }
  btnSounds[0].classList.add('active')
  btnSounds[1].classList.remove('active')
  btnSounds[2].classList.remove('active')
  btnSounds[3].classList.remove('active')
  sounds.bg_forest.play()
  sounds.bg_rain.pause()
  sounds.bg_coffeShop.pause()
  sounds.bg_firerSide.pause()
}

export function toggleRain () {
  const play = btnSounds[1].classList.contains('active')
  if(play) {
    btnSounds.forEach( index => index.classList.remove('active'))
    sounds.bg_rain.pause()
    return
  }
  btnSounds[1].classList.add('active')
  btnSounds[0].classList.remove('active')
  btnSounds[2].classList.remove('active')
  btnSounds[3].classList.remove('active')
  sounds.bg_rain.play()
  sounds.bg_forest.pause()
  sounds.bg_coffeShop.pause()
  sounds.bg_firerSide.pause()

}

export function toggleCoffeShop () {
  const play = btnSounds[2].classList.contains('active')
  if(play) {
    btnSounds.forEach( index => index.classList.remove('active'))
    sounds.bg_coffeShop.pause()
    return
  }
  btnSounds[2].classList.add('active')
  btnSounds[0].classList.remove('active')
  btnSounds[1].classList.remove('active')
  btnSounds[3].classList.remove('active')
  sounds.bg_coffeShop.play()
  sounds.bg_rain.pause()
  sounds.bg_forest.pause()
  sounds.bg_firerSide.pause()
}

export function toggleFirerSide () {
  const play = btnSounds[3].classList.contains('active')
  if(play) {
    btnSounds.forEach( index => index.classList.remove('active'))
    sounds.bg_firerSide.pause()
    return
  }
  btnSounds[3].classList.add('active')
  btnSounds[0].classList.remove('active')
  btnSounds[1].classList.remove('active')
  btnSounds[2].classList.remove('active')
  sounds.bg_firerSide.play()
  sounds.bg_coffeShop.pause()
  sounds.bg_rain.pause()
  sounds.bg_forest.pause()
}