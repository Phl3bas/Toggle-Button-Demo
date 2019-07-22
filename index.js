const menu1 = document.querySelector('#menu1');
const topBar1 = document.querySelector('#menu1 .menu__bar--top');
const midBar1 = document.querySelector('#menu1 .menu__bar--middle');
const botBar1 = document.querySelector('#menu1 .menu__bar--bottom');

menu1.addEventListener('click',()=>{
	topBar1.classList.toggle('menu__bar--rotateLeft');
	midBar1.classList.toggle('menu__bar--hide');
	botBar1.classList.toggle('menu__bar--rotateRight');
});

const menu2 = document.querySelector('#menu2');
const topBar2 = document.querySelector('#menu2 .menu__bar--top');
const midBar2 = document.querySelector('#menu2 .menu__bar--middle');
const botBar2 = document.querySelector('#menu2 .menu__bar--bottom');

menu2.addEventListener('click',()=>{
	topBar2.classList.toggle('menu__transition2--top');
	midBar2.classList.toggle('menu__transition2--middle');
	botBar2.classList.toggle('menu__transition2--bottom');
});

const menu3 = document.querySelector('#menu3');
const topBar3 = document.querySelector('#menu3 .menu__bar--top');
const midBar3 = document.querySelector('#menu3 .menu__bar--middle');
const botBar3 = document.querySelector('#menu3 .menu__bar--bottom');
let state = false;

menu3.addEventListener('click',()=>{
	

	if (!state){
		topBar3.classList.add('menu__transition3-top-start');
		midBar3.classList.add('menu__transition3-middle');
		botBar3.classList.add('menu__transition3-bottom-start');
		
		setTimeout(function(){
			topBar3.classList.add('menu__transition3-top-end');
			botBar3.classList.add('menu__transition3-bottom-end');
		},300);
		
		state = true;
		
	} else {
		
		topBar3.classList.remove('menu__transition3-top-end');
		botBar3.classList.remove('menu__transition3-bottom-end');
		
		setTimeout(function(){
			topBar3.classList.remove('menu__transition3-top-start');
			midBar3.classList.remove('menu__transition3-middle');
			botBar3.classList.remove('menu__transition3-bottom-start');
			},300);
			
		state = false;
	}
});
