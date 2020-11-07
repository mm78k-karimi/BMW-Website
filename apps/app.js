
// menu
const navbar = document.getElementById('navbar');
const manu = document.getElementById('menu');
menu.addEventListener('click', openMenu)

function openMenu(){
  if(navbar.lastElementChild.style.transform =='scale(0)'){
    navbar.lastElementChild.style ='transform:scale(1) ; transition:all 1s';
    menu.style="transform:rotate(810deg) ; transition:all 1s"
  } else {
    navbar.lastElementChild.style='transform:scale(0)  ; transition:all 1s';
    menu.style="transform:rotate(0deg) ; transition:all 1s"
  }
}

