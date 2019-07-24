images = [
	"./images/fjord1.jpg",
	"./images/fjord2.jpg",
	"./images/fjord3.jpg"
];
const body = document.querySelector('body');




/*Menu One Javascript Toggle*/
const menu1 = document.querySelector('#menu1');
const topBar1 = document.querySelector('#menu1 .menu__bar--top');
const midBar1 = document.querySelector('#menu1 .menu__bar--middle');
const botBar1 = document.querySelector('#menu1 .menu__bar--bottom');
let menu1state = false;
menu1.addEventListener('click',()=>{
	topBar1.classList.toggle('menu__transition1--top');
	midBar1.classList.toggle('menu__transition1--middle');
	botBar1.classList.toggle('menu__transition1--bottom');
	
	body.style.backgroundImage = `url(${images[0]})`;
	menu1state = !menu1state;;
});

/*Menu Two Javascript Toggle*/
const menu2 = document.querySelector('#menu2');
const topBar2 = document.querySelector('#menu2 .menu__bar--top');
const midBar2 = document.querySelector('#menu2 .menu__bar--middle');
const botBar2 = document.querySelector('#menu2 .menu__bar--bottom');
let menu2state = false;

menu2.addEventListener('click',()=>{
	if(!menu2state){
		topBar2.classList.add('menu__transition2--top-start');
		botBar2.classList.add('menu__transition2--bottom-start');
		
		setTimeout(function(){
			topBar2.classList.add('menu__transition2--top-end');
			midBar2.classList.add('menu__transition2--middle-end');
			botBar2.classList.add('menu__transition2--bottom-end');
		},300);
	} else {
			topBar2.classList.remove('menu__transition2--top-end');
			midBar2.classList.remove('menu__transition2--middle-end');
			botBar2.classList.remove('menu__transition2--bottom-end');
			
			setTimeout(function(){
				topBar2.classList.remove('menu__transition2--top-start');
				botBar2.classList.remove('menu__transition2--bottom-start');
		},300);
	}
menu2state = !menu2state;
	body.style.backgroundImage = `url(${images[1]})`;
});



/*Menu Three Javascript Toggle*/
const menu3 = document.querySelector('#menu3');
const topBar3 = document.querySelector('#menu3 .menu__bar--top');
const midBar3 = document.querySelector('#menu3 .menu__bar--middle');
const botBar3 = document.querySelector('#menu3 .menu__bar--bottom');

let menu3state = false;

menu3.addEventListener('click',()=>{
	if (!menu3state){
		topBar3.classList.add('menu__transition3-top-start');
		midBar3.classList.add('menu__transition3-middle');
		botBar3.classList.add('menu__transition3-bottom-start');
		
		setTimeout(function(){
			topBar3.classList.add('menu__transition3-top-end');
			botBar3.classList.add('menu__transition3-bottom-end');
		},300);
	} else {
		topBar3.classList.remove('menu__transition3-top-end');
		botBar3.classList.remove('menu__transition3-bottom-end');
		
		setTimeout(function(){
			topBar3.classList.remove('menu__transition3-top-start');
			midBar3.classList.remove('menu__transition3-middle');
			botBar3.classList.remove('menu__transition3-bottom-start');
			},300);
	}
menu3state = !menu3state;
body.style.backgroundImage = `url(${images[2]})`;
});
