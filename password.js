let form = document.getElementById("password-form")
let passwordInput = document.getElementById("password")

let password = "858hedgehogz858"

console.log(form)

function formSubmitted(event) {
    event.preventDefault()
    let value = passwordInput.value
    console.log("Password submitted:", value)
    if (value == password) {
        console.log("submitted")
        window.location.href = "site.html"
    }
}

form.addEventListener("submit", formSubmitted)