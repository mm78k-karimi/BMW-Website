
const models = ["BMW X6 M Competion", "BMW X5 M Competion", "BMW X3 M Competion", "BMW X2 M35i", "BMW M850i xDrive Gran Coupe", "BMW M8 Competition Gran Coupe", "BMW M8 Competion Convertible", "BMW M8 Competition Coupe", "BMW M5 Competition", "BMW M4 Convertible", "BMW 4 Series Coupe M Automobile", "BMW 3 Series Sedan M Automobiles", "BMW M235i xDrive Gran Coupe Automobile", "BMW M2 Competition", "BMW M135i xDrive", "BMW X7", "BMW X6", "BMW X4", "BMW X2", "BMW X1 xDrive25e", "BMW X1", "BMW 8 Series Gran Coupe", "BMW 8 Series Convertible", "BMW M760Li xDrive Sedan", "BMW 745e Plug-in Hybrid", "BMW i8 Roadster", "BMW i8"]
const searchbox = document.getElementById('car');
const carList = document.getElementById('cars-list').firstElementChild;
const showableList = document.getElementById('cars-list');

searchbox.addEventListener('keyup' , showList);
let list = ` `

function showList(){

  list = ` `
  if(searchbox.value.length > 0){
    carList.style.padding='10px';
    showableList.style.display='block';
    for( let i = 0 ; i < models.length ; i++){
      if (models[i].toLowerCase().indexOf(searchbox.value.toLowerCase()) != -1){
        list +=`<li> <a href="#">${models[i]}</a></li>` ;
      }
    }
  }else {
    carList.style.padding='0px';
  }
  carList.innerHTML = list;

  if (carList.clientHeight > showableList.clientHeight) {
    showableList.style.overflowY ="scroll"
  }
  else{
    showableList.style.overflowY ="hidden"
  }
}

window.addEventListener('click' , removeList);

function removeList(e){
  if(e.target.type != 'search'){
    showableList.style.display='none'
  } else {
    showableList.style.display='block'
  }
}