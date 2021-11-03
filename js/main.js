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

