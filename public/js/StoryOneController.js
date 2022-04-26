const btn = document.querySelector('.s_btn')
const audio = document.querySelector('audio')
const visualizer = document.querySelector('.s_visualizer')
  
    btn.addEventListener('click',e => {
      audio.paused ? audio.play():audio.pause()
      btn.classList.toggle('s_btn_play')
      btn.classList.toggle('s_btn_pause')
    })