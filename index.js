const menu = document.querySelector('.menu');
const topBar = document.querySelector('.menu__bar--top');
const midBar = document.querySelector('.menu__bar--middle');
const botBar = document.querySelector('.menu__bar--bottom');

menu.addEventListener('click',()=>{
	topBar.classList.toggle('menu__bar--rotateLeft');
	midBar.classList.toggle('menu__bar--hide');
	botBar.classList.toggle('menu__bar--rotateRight');
});
