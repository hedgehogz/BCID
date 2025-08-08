let htmlLoaded = false

let timeGrid = document.getElementById("timer-grid")
let timeElement = document.getElementById("current-time")

let idPhoto = document.getElementById("id-photo")
let idPhotoInput = document.getElementById("id-photo-input")

let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let studentName = document.getElementById("student-name")

let timeNow
let hours
let minutes
let seconds

function updateTextDiv(textDiv) {
    let text = window.prompt("Enter text")
    if (text !== null && text.trim() !== "") {
      if (textDiv !== studentName) {
        textDiv.textContent = text
       }
      else {
      textDiv.textContent = text.toUpperCase()
      }
     }
}

function updateIdPhoto() {
    let files = idPhotoInput.files
    idPhoto.src = URL.createObjectURL(files[0])
}

function triggerInput() {
    idPhotoInput.click()
}

function updateTime() {
    timeNow = new Date()
    hours = String(timeNow.getHours()).padStart(2, '0')
    minutes = String(timeNow.getMinutes()).padStart(2, '0')
    seconds = String(timeNow.getSeconds()).padStart(2, '0')
    timeElement.textContent = hours + ":" + minutes + ":" + seconds
}

function updateOpacity() {
    timeGrid.style.opacity = (Math.sin(Date.now() / 500) + 1.25)/2; // Oscillate opacity between .25 and 1.25
    timeElement.style.position = "absolute"
    timeElement.style.transform = "translateX(" + Math.sin(Date.now() / 500) * 230 + "px)";
}

function loaded() {
    htmlLoaded = true
    updateTime()
    setInterval(updateTime, 1000)
    setInterval(updateOpacity, 10)

    for (let textDiv of [text1, text2, studentName]) {
    textDiv.addEventListener("click", function() {
        updateTextDiv(textDiv)
    })
}
}
    
document.addEventListener("DOMContentLoaded", loaded)
idPhoto.addEventListener("click", triggerInput)
idPhotoInput.addEventListener("change", updateIdPhoto)

 