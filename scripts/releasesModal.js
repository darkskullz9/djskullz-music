const modal = document.getElementById("releaseModal");
const modalContent = modal.querySelector('.modal-content')

function openModal(card) {
	const cover = card.querySelector('.cover').src;
	const title = card.querySelector('h2').textContent;
	const date = card.querySelector('p').textContent;
	const link = card.getAttribute('data-link');

	modalContent.innerHTML = `
		<i id="closeModal" class="fa-solid fa-xmark close"></i>
		<img src="${cover}" alt="${title} cover" class="modal-cover">	
		<div class="modal-info">
			<h2>${title}</h2>
			<p class="release-date">${date}</p>			
			<div class="release-links">
				<a href="${link}" target="_blank" rel="noopener">
					<i class="fa-brands fa-soundcloud icons"></i>
				</a>
			</div>
		</div>
	`;

	modal.style.display = "block";

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
// openModalBtn.addEventListener("click", () => {
// 	modal.style.display = "block";
// });

// closeModalBtn.addEventListener("click", () => {
// 	modal.style.display = "none";
// });

// window.addEventListener("click", (event) => {
// 	if (event.target === modal) {
// 		modal.style.display = "none";
// 	}
// });