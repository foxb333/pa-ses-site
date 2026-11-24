const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const isHighlighted = card.dataset.highlighted === "true";
        card.dataset.highlighted = isHighlighted ? "false" : "true";
        card.style.boxShadow = isHighlighted ? "" : "0 0 30px #b7c4cf";
    });
});
