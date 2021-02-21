/* eslint-disable no-inner-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
'use strict';


let maximumClicks = 25;
let attempts = 0;

let img1_element = document.getElementById('img_1');
let img2_element = document.getElementById('img_2');
let img3_element = document.getElementById('img_3');


let arrOfObjects = [];
function Product(name, source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.showen=0;
  arrOfObjects.push(this);
}
// eslint-disable-next-line new-cap
new Product('bag','img/bag.jpg');
new Product('banana','img/banana.jpg');
new Product('bathroom','img/bathroom.jpg');
new Product('boots','img/boots.jpg');
new Product('breakfast','img/breakfast.jpg');
new Product('bubblegum','img/bubblegum.jpg');
new Product('chair','img/chair.jpg');
new Product('cthulhu','img/cthulhu.jpg');
new Product('dog-duck','img/dog-duck.jpg');
new Product('dragon','img/dragon.jpg');
new Product('pen','img/pen.jpg');
new Product('pet-sweep','img/pet-sweep.jpg');
new Product('scissors','img/scissors.jpg');
new Product('shark','img/shark.jpg');
new Product('sweep','img/sweep.png');
new Product('tauntaun','img/tauntaun.jpg');
new Product('unicorn','img/unicorn.jpg');
new Product('usb','img/usb.gif');
new Product('water-can','img/water-can.jpg');
new Product('wine-glass','img/wine-glass.jpg');




// console.log(arrOfObjects);
let img1;
let img2;
let img3;
function renderTreeRandomImages(){
  img1 = generateRandomIndex();
  img2 = generateRandomIndex();
  img3=generateRandomIndex();

  while(img1 === img2 ||img1===img3||img3===img2){
    img1 = generateRandomIndex();
    img2=generateRandomIndex();
  }



  img1_element.setAttribute('src', arrOfObjects[img1].source);
  img2_element.setAttribute('src', arrOfObjects[img2].source);
  img3_element.setAttribute('src', arrOfObjects[img3].source);



}

renderTreeRandomImages();



function generateRandomIndex(){
  //0.99999      *    6
  //floor (5.99999) =>   5
  // 0.55555
  let randomIndex = Math.floor(Math.random() * arrOfObjects.length);
  return randomIndex;
}


img1_element.addEventListener('click', handleClicking);
img2_element.addEventListener('click', handleClicking);
img3_element.addEventListener('click', handleClicking);

// id from the image
function handleClicking(event){
  attempts++;
  // console.log(event);
  //Limiting The user;
  // 10  === 10;
  if(attempts <= maximumClicks){
    if(event.target.id === 'img_1'){
      arrOfObjects[img1].votes++;
      arrOfObjects[img1].showen++;
      arrOfObjects[img2].showen++;
      arrOfObjects[img3].showen++;

      // console.log(arrOfObjects[leftImageIndex].votes);
    }else if(event.target.id === 'img_2'){
      arrOfObjects[img2].votes++;
      arrOfObjects[img2].showen++;
      arrOfObjects[img1].showen++;
      arrOfObjects[img3].showen++;
    }else if(event.target.id === 'img_3'){
      arrOfObjects[img3].votes++;
      arrOfObjects[img3].showen++;
      arrOfObjects[img1].showen++;
      arrOfObjects[img2].showen++;
    }
    renderTreeRandomImages();
    console.log(arrOfObjects);
  }else{
    unorderdList.addEventListener('click',showResult);
    function showResult(event){
      let li;
      for(let i = 0 ; i < arrOfObjects.length; i++){
        li = document.createElement('li');
        unorderdList.appendChild(li);
        // [0]
        //cursin goat it has
        li.textContent = `${arrOfObjects[i].name} it has ${arrOfObjects[i].votes} Votes.  and it has  Showen :${arrOfObjects[i].showen} tims `;}
      unorderdList.removeEventListener('click',showResult);
    }

    img1_element.removeEventListener('click', handleClicking);
    img2_element.removeEventListener('click', handleClicking);
    img3_element.removeEventListener('click',handleClicking);

  }

}

let submit=document.createElement('button');
let unorderdList = document.getElementById('unList');
unorderdList.appendChild(submit);
submit.textContent='Show The Result';




