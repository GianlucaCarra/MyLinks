function toggle() {
  const body = document.body
  body.classList.toggle('light')

  const img = document.querySelector('#profile img')
  if(body.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png")
    alt.setAttribute("alt", "Pic of me in the beach")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
