
// Appear the text

const article = document.getElementsByClassName('article');

window.addEventListener('scroll',showElement);

function showElement (){
  
  for(let i = 0 ; i < article.length ; i++){
    if(article[i].getBoundingClientRect().top <= (window.outerHeight*0.8 + article[i].offsetHeight/2)){
      article[i].style = "transform:scale(1)"
    }
  }
  for(let j = 0 ; j< article.length ; j++){
    if(article[j].getBoundingClientRect().bottom <= window.outerHeight*0.2){
      article[j].style="transform:scale(0)";
    }
  }
}
