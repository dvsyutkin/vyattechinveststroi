window.addEventListener('DOMContentLoaded', function () {
	let navServ = document.querySelector('.nav-serv');
	navServ.addEventListener('click', function () {
		document.querySelector('.menu__serv').classList.toggle('down');
	});



	let btnMenu = document.querySelector('.btn__menu');
	btnMenu.addEventListener('click', function () {
		let navMenu = document.querySelector('.nav__menu');
		navMenu.classList.toggle('hide');

		let line1 = this.querySelector('.line-1');
		line1.classList.toggle('line-3-transform');

		let line2 = this.querySelector('.line-2');
		line2.classList.toggle('line-2-none');

		let line3 = this.querySelector('.line-3');
		line3.classList.toggle('line-1-transform');


		this.classList.toggle('white');
	});

	let more = document.querySelector('.more');
	more.addEventListener('click', function () {
		let mobMenu = document.querySelector('.mob__menu-more');
		console.log(mobMenu.style.maxHeight);

		if (mobMenu.style.maxHeight) {
			mobMenu.style.maxHeight = null;
		} else {
			mobMenu.style.maxHeight = mobMenu.scrollHeight + "px";
		}
	});

	// всплывающее окно
	const btnOrder = document.querySelectorAll('.btn-order'),
	popupOverlay = document.querySelector('.popup__overlay');
	btnOrder.forEach(element => {
		element.addEventListener('click', function () {
			popupOverlay.style.display = 'block';
			document.body.style.overflow = "hidden";
		});
	});

	popupOverlay.addEventListener('click', function (e) {
		if (e.target === this) {
			popupOverlay.style.display = 'none';
			document.body.style.overflow = "";
		}
	});
	const closeForm = document.querySelector('.popup-form-btn-close');
	closeForm.addEventListener('click', ()=>{
		popupOverlay.style.display = 'none';
		document.body.style.overflow = "";
	});







});