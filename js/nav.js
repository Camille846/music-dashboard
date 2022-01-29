const $menu = document.querySelector('.menu');
const $nav = document.querySelector('.nav');
let menuOpen = false;
$menu.addEventListener('click', function(){
	if(!menuOpen){
		$menu.classList.add('open');
    $nav.style.display = 'flex';
    document.getElementById('menu-burger').style.marginLeft = '150px';
    document.getElementById('listening__content').style.marginLeft = '50px';
		menuOpen = true;
	}
	else{
		$menu.classList.remove('open');
    $nav.style.display = 'none';
    document.getElementById('menu-burger').style.marginLeft = '0px';
    document.getElementById('listening__content').style.marginLeft = '0px';
		menuOpen = false;
	}
});