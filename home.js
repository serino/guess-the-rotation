let image = document.getElementById("image")
let degreesInput = document.getElementById("degreesInput")
let submitButton = document.getElementById("submitButton")

let resultParagraph = document.getElementById("resultParagraph")

submitButton.addEventListener("click", revealRotation)

let rotation

rotateCompass()

function revealRotation() {
  if (rotation != degreesInput.value) {
  resultParagraph.innerHTML = `Rotation is ${rotation}. You were off by ${Math.abs(rotation - degreesInput.value)} degrees.`
} 
else {
  resultParagraph.innerHTML = `Rotation is ${rotation}. You were correct!`
}
  restartButton.style.display = "block"
  submitButton.style.display = "none"
  degreesInput.value = ""

}

function restartGame()  {
  rotateCompass()
  resultParagraph.innerHTML = ""
  restartButton.style.display = "none"
  submitButton.style.display = "inline-block"
}

function rotateCompass() {
  rotation = Math.floor(Math.random() * 359)
  image.style.transform = `rotate(${rotation}deg)`
}

