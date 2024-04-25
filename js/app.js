const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle('dark')

  if (document.body.className.includes('dark')) {
    localStorage.setItem('mood', 'dark')
  }else{
    localStorage.setItem('mood', 'light')

  }
})

window.addEventListener('load', function () {
  let currentMood = localStorage.getItem('mood')
  if(currentMood === 'dark') {
    document.body.classList.add('dark')
  }
})
