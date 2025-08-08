let htmlLoaded = false

let timeGrid = document.getElementById("timer-grid")
let timeElement = document.getElementById("current-time")

let idPhoto = document.getElementById("id-photo")
let idPhotoInput = document.getElementById("id-photo-input")

let studentName = document.getElementById("student-name")

let timeNow
let hours
let minutes
let seconds

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
    timeGrid.style.opacity = (Math.sin(Date.now() / 500) + 1.25)/2; // Oscillates opacity between .25 and 1.25
    timeElement.style.left = Math.sin(Date.now() / 500) * 25 + "vw"
}

function loaded() {
    htmlLoaded = true
    updateTime()
    setInterval(updateTime, 1000)
    setInterval(updateOpacity, 10)
}
    
document.addEventListener("DOMContentLoaded", loaded)
idPhoto.addEventListener("click", triggerInput)
idPhotoInput.addEventListener("change", updateIdPhoto)
