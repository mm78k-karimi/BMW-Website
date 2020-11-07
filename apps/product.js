// Products page 

const goUp = document.getElementById('go-up');
window.addEventListener("scroll" , showBtn);

function showBtn(){
  if (window.scrollY >= 200){
    goUp.style = "transform:scale(1)"
  } else {
    goUp.style = "transform:scale(0)"
  }
}
goUp.addEventListener('click' , goTop)

function goTop (){
  window.scrollTo(0,0);
}
