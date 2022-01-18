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

let swiper = new Swiper(".mySwiper", {
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    keyboard: true,
});

// Light/Dark Mode Theme
const chk = document.getElementById('chk')
if(chk) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  chk.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function initTheme() {
    let darkThemeSelected = (localStorage.getItem('chk') !== null && localStorage.getItem('chk') === 'dark');
    // update checkbox
    chk.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ?  document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');
  };

  function resetTheme() {
    if(chk.checked) { // dark theme has been selected
      document.body.classList.add('dark-theme');
      localStorage.setItem('chk', 'dark'); // save theme selection 
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.removeItem('chk'); // reset theme selection 
    } 
  };
}

// CHANGE PROFILE LIST ON POPULAR GENRES
const blues_button = document.getElementById('blues');
// blues_button.checked = true;
const blues_container = document.getElementById('blues_container');
const sertanejo_button = document.getElementById('sertanejo');
const sertanejo_container = document.getElementById('sertanejo_container');
const metal_button = document.getElementById('metal');
const metal_container = document.getElementById('metal_container');
const country_button = document.getElementById('country');
const country_container = document.getElementById('country_container');
const soul_button = document.getElementById('soul');
const soul_container = document.getElementById('soul_container');
const eletronic_button = document.getElementById('eletronic');
const eletronic_container = document.getElementById('eletronic_container');
const hip_hop_button = document.getElementById('hip_hop');
const hip_hop_container = document.getElementById('hip_hop_container');


// click event 
window.addEventListener("click", function(event) {

    if(event.target == blues_button) {
        sertanejo_container.style.display = "none";
        metal_container.style.display = "none";
        country_container.style.display = "none";
        soul_container.style.display = "none";
        eletronic_container.style.display = "none";
        hip_hop_container.style.display = "none";
        blues_container.style.display = "grid";
    } else if (event.target == sertanejo_button) {
        blues_container.style.display = "none";
        metal_container.style.display = "none";
        country_container.style.display = "none";
        soul_container.style.display = "none";
        eletronic_container.style.display = "none";
        hip_hop_container.style.display = "none";
        sertanejo_container.style.display = "grid";
    } else if (event.target == metal_button) {
        blues_container.style.display = "none";
        sertanejo_container.style.display = "none";
        country_container.style.display = "none";
        soul_container.style.display = "none";
        eletronic_container.style.display = "none";
        hip_hop_container.style.display = "none";
        metal_container.style.display = "grid";
    } else if (event.target == country_button) {
        blues_container.style.display = "none";
        sertanejo_container.style.display = "none";
        metal_container.style.display = "none";
        soul_container.style.display = "none";
        eletronic_container.style.display = "none";
        hip_hop_container.style.display = "none";
        country_container.style.display = "grid";
    } else if (event.target == soul_button) {
        blues_container.style.display = "none"; 
        sertanejo_container.style.display = "none";
        metal_container.style.display = "none";
        country_container.style.display = "none";
        eletronic_container.style.display = "none";
        hip_hop_container.style.display = "none";
        soul_container.style.display = "grid";
    } else if (event.target == eletronic_button) {
        blues_container.style.display = "none";
        sertanejo_container.style.display = "none";
        metal_container.style.display = "none";
        country_container.style.display = "none";
        soul_container.style.display = "none";
        hip_hop_container.style.display = "none";
        eletronic_container.style.display = "grid";
    } else if (event.target == hip_hop_button) {
        blues_container.style.display = "none";
        sertanejo_container.style.display = "none";
        metal_container.style.display = "none";
        country_container.style.display = "none";
        soul_container.style.display = "none";
        eletronic_container.style.display = "none";
        hip_hop_container.style.display = "grid";
    } 
});


// CHART JS 
 // === include 'setup' then 'config' above ===
 
 const ctx = document.getElementById('myChart').getContext('2d');

 const configLine = {
  type: 'line',
  data: {
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.4,
      fill: true
    }],
  }
};
 const myChart = new Chart(ctx, configLine);