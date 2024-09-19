const modal = document.getElementById("releaseModal");
const modalContent = modal.querySelector('.modal-content');

function createModalContent(card) {
	const cover = card.querySelector('.cover').src;
	const title = card.querySelector('h2').textContent;
	const date = card.querySelector('p').textContent;

	const links = {
		spotify: card.getAttribute('data-spotify'),
		youtube: card.getAttribute('data-youtube'),
		soundcloud: card.getAttribute('data-soundcloud')
	};

	const linksHTML = Object.entries(links).map(([key, url]) => {
		if(url) {
			return `<a href="${url}" target="_blank" rel="noopener">
						<i class="fa-brands fa-${key} icons"></i>
					</a>`;
		}
		return '';
	}).join('');

	return `
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
};

function openModal(card) {
	modalContent.innerHTML = createModalContent(card);
	modal.style.display = "flex";
	modal.style.alignItems = "center";
};

function closeModal() {
	modal.style.display = "none";
};

modalContent.addEventListener("click", (event) => {
	if(event.target.id === "closeModal") {
		closeModal();
	}
});

document.addEventListener("click", (event) => {
	if(event.target.id === "releaseModal") {
		closeModal();
	}
});

document.querySelectorAll('.card').forEach(card => {
	card.addEventListener("click", () => openModal(card));
});

console.log(closeModal);