const cards = document.querySelectorAll('.card');

cards.forEach(card => {

    card.addEventListener('click', () => {

        card.style.boxShadow =
            card.style.boxShadow === '0 0 30px #b7c4cf'
            ? '0 5px 15px rgba(0,0,0,0.08)'
            : '0 0 30px #b7c4cf';

    });

});
