const form = document.getElementById("form")
const nama = document.getElementById("nama")
const password = document.getElementById("pass")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const locenama = localStorage.getItem("Nama")
    const locpass = localStorage.getItem("Password")

    if( nama.value == locenama && password.value == locpass) {
        alert("Berhasil Masuk")
        window.location.href = "home.html"
    } else {
        alert("GAGAL")
    }
})