const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeButton.textContent = "☀️ Tema Claro";
        localStorage.setItem("theme","dark");
    }else{
        themeButton.textContent = "🌙 Tema Escuro";
        localStorage.setItem("theme","light");
    }

});

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️ Tema Claro";
}