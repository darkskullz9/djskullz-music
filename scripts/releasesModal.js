const modal = document.getElementById("releaseModal");
const modalContent = modal.querySelector('.modal-content')

function openModal(card) {
	const cover = card.querySelector('.cover').src;
	const title = card.querySelector('h2').textContent;
	const date = card.querySelector('p').textContent;

	const links = {
		spotify: card.getAttribute('data-spotify'),
		youtube: card.getAttribute('data-youtube'),
		soundcloud: card.getAttribute('data-soundcloud')
	};

	const linksHTML = Object.entries(links) .map(([key, url]) => {
		if(url) {
			return `<a href="${url}" target="_blank" rel="noopener">
						<i class="fa-brands fa-${key} icons"></i>
					</a>`;
		}
		return '';
	}).join('');

	modalContent.innerHTML = `
		<span id="closeModal" class="close">Back</span>
		<img src="${cover}" alt="${title} cover" class="modal-cover">	
		<div class="modal-info">
			<h2>${title}</h2>
			<p class="release-date">${date}</p>		
			<p>Listen on: </p>	
			<div class="release-links">
				${linksHTML}
			</div>
		</div>
	`;

	modal.style.display = "flex";
	modal.style.alignItems = "center";

	document.getElementById("closeModal").addEventListener("click", closeModal);
}

function closeModal() {
	modal.style.display = "none";
}

document.querySelectorAll('.card').forEach(card => {
	card.addEventListener("click", () => openModal(card));
});

window.addEventListener("click", (event) => {
	if(event.target === modal) {
		closeModal ();
	}
});