function daftar (e) {
    e.preventDefault();

    const name = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pw = document.getElementById("password").value;

    localStorage.setItem("Nama", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pw);

    alert("Selamat Anda Berhasil Mendaftar")
}

const tombol = document.getElementById("daftarin");

tombol.onclick = daftar;
