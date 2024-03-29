let forgot_psw = document.querySelector('#forgot_form')
let email = document.querySelector('#email')
let form = document.querySelector("#forgot_form")
const url = window.location.origin+"/api/auth/forgotpassword"

form.addEventListener("submit", function(event) {
    event.preventDefault()

    let data = {
        email: email.value,
    }

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        return response.json()
    })
})