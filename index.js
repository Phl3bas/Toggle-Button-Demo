const images = document.querySelectorAll('.bg');


/*Menu One Javascript Toggle*/
const menu1 = document.querySelector('#menu1');
const topBar1 = document.querySelector('#menu1 .menu__bar--top');
const midBar1 = document.querySelector('#menu1 .menu__bar--middle');
const botBar1 = document.querySelector('#menu1 .menu__bar--bottom');



let menu1state = false;
menu1.addEventListener('click',()=>{
  console.log("button 1 clicked");
	topBar1.classList.toggle('menu__transition1--top');
	midBar1.classList.toggle('menu__transition1--middle');
	botBar1.classList.toggle('menu__transition1--bottom');
	images[0].classList.toggle('hidden');
	menu1state = !menu1state;

});

/*Menu Two Javascript Toggle*/
const menu2 = document.querySelector('#menu2');
const topBar2 = document.querySelector('#menu2 .menu__bar--top');
const midBar2 = document.querySelector('#menu2 .menu__bar--middle');
const botBar2 = document.querySelector('#menu2 .menu__bar--bottom');


let menu2state = false;

menu2.addEventListener('click',()=>{
  console.log("button 2 clicked");
	if(!menu2state){
		topBar2.classList.add('menu__transition2--top-start');
		botBar2.classList.add('menu__transition2--bottom-start');
		
		setTimeout(function(){
			topBar2.classList.add('menu__transition2--top-end');
			midBar2.classList.add('menu__transition2--middle-end');
			botBar2.classList.add('menu__transition2--bottom-end');
      images[1].classList.remove('hidden');
      
		},300);
	} else {
			topBar2.classList.remove('menu__transition2--top-end');
			midBar2.classList.remove('menu__transition2--middle-end');
			botBar2.classList.remove('menu__transition2--bottom-end');
			
			setTimeout(function(){
				topBar2.classList.remove('menu__transition2--top-start');
				botBar2.classList.remove('menu__transition2--bottom-start');
        images[1].classList.add('hidden');
		},300);
	}
menu2state = !menu2state;
  	images[1].classList.toggle('hidden');
});



/*Menu Three Javascript Toggle*/
const menu3 = document.querySelector('#menu3');
const topBar3 = document.querySelector('#menu3 .menu__bar--top');
const midBar3 = document.querySelector('#menu3 .menu__bar--middle');
const botBar3 = document.querySelector('#menu3 .menu__bar--bottom');

let menu3state = false;

menu3.addEventListener('click',()=>{
  console.log("button 3 clicked");
	if (!menu3state){
		topBar3.classList.add('menu__transition3-top-start');
		midBar3.classList.add('menu__transition3-middle');
		botBar3.classList.add('menu__transition3-bottom-start');
		
		setTimeout(function(){
			topBar3.classList.add('menu__transition3-top-end');
			botBar3.classList.add('menu__transition3-bottom-end');
      images[2].classList.remove('hidden');
		},300);

	} else {
		topBar3.classList.remove('menu__transition3-top-end');
		botBar3.classList.remove('menu__transition3-bottom-end');
		
		setTimeout(function(){
			topBar3.classList.remove('menu__transition3-top-start');
			midBar3.classList.remove('menu__transition3-middle');
			botBar3.classList.remove('menu__transition3-bottom-start');
      images[2].classList.add('hidden');

			},300);
	}
menu3state = !menu3state;

});
