function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver light mode, mudar a imagem
    img.setAttribute("src", "./assets/ingridd.jpg")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/ingrid.jpg")
  }
}
