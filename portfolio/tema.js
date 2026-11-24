const themeButton = document.getElementById("theme-toggle");

if (themeButton) {
    const applyTheme = (isDark) => {
        document.body.classList.toggle("dark-mode", isDark);
        themeButton.textContent = isDark ? "☀️ Tema Claro" : "🌙 Tema Escuro";
        themeButton.setAttribute("aria-pressed", isDark ? "true" : "false");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    const savedTheme = localStorage.getItem("theme") === "dark";
    document.body.classList.toggle("dark-mode", savedTheme);
    themeButton.textContent = savedTheme ? "☀️ Tema Claro" : "🌙 Tema Escuro";
    themeButton.setAttribute("aria-pressed", savedTheme ? "true" : "false");

    themeButton.addEventListener("click", () => {
        applyTheme(!document.body.classList.contains("dark-mode"));
    });
}