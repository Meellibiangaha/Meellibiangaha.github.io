const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let fiolTheme = "styles/color_fiol.css";
let pinkTheme = "styles/color_pink.css";
let blueTheme = "styles/color_blue.css";
let redTheme = "styles/color_red.css";
let userTheme;
let theme_arr = [fiolTheme, pinkTheme, blueTheme, redTheme];
let theme_list = ["color_fiol", "color_pink", "color_blue", "color_red"];

let buttonSwaps = document.querySelectorAll('.swap_theme');

for(let i = 0; i < buttonSwaps.length; i++){
  buttonSwaps[i].addEventListener('click', function(){
    let link = document.getElementById("theme_link");
    
    let currTheme = link.getAttribute("href");
    let theme = "";
    if(currTheme != theme_arr[i])
    {
     currTheme = theme_arr[i];
     theme = theme_list[i];
     userTheme = currTheme;
    }
    if(!userTheme){
      userTheme = fiolTheme;
    }
    else{
      localStorage.setItem('theme', userTheme);
      link.setAttribute("href", currTheme);
    }
    
  });
}

window.onload = function() {
  if(localStorage.length != 0){
    let current_theme = localStorage.getItem('theme');
    document.body.style.display = "none";
    setTimeout(() => document.body.style.display = "", 1); //я не знаю как, но это убирает ненужную анимацию при f5
    document.getElementById("theme_link").setAttribute("href", current_theme);
  }
}

// Modal okno

const closeModal = () => { 
  const modals = document.querySelectorAll('.modal')
  if (!modals) {return;}
  modals.forEach(el => {
    el.addEventListener('click', e => {

      if (!e.target.closest('.modal__body')) { 
        el.classList.remove('modal_active');
      }
    });
  });
}
closeModal();


let podrobneeBtn = document.querySelectorAll('.block_4_button');
let podrobneeModal = document.querySelectorAll('.block_4_Modal');
for(let i = 0; i < podrobneeBtn.length; i++){
  podrobneeBtn[i].addEventListener('click', function() {
    let modal = podrobneeModal[i];
  if (!modal) {
    return;
  }
  modal.classList.add('modal_active');
});
}
