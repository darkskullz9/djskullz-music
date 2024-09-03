document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card')
    const modal = document.getElementById('releasesModal')
    const modalContent = modal.querySelector('.modelContent')

    function openModal(card) {
        const cover = card.querySelector('.cover').src
        const title = card.querySelector('h2').textContent
        const date = card.querySelector('p').textContent

        modalContent.innerHTML = `
            <span class="closeButton">&times;</span>
            <img class="modal-cover" src="${cover}" alt="${title} cover">
            <h2>${title}</h2>
            <p>${date}</p>
        `;

        modal.style.display = 'block';

        modal.querySelector('.closeButton').addEventListener('click', () => modal.style.display = 'none')
    }

    cards.forEach(card => card.addEventListener('click', () => openModal(card)))
})